import pandas as pd
from base64 import b64encode
import json
from django.http import JsonResponse, HttpResponse
import requests
from django.views.decorators.csrf import csrf_exempt
from food.models import Food, Taste, Test
from account.models import CustomUser
from rest_framework_simplejwt.tokens import AccessToken
from food.serializers import FoodSerializer, FoodScrapSerializer
from food.utils import recommender_system

MODEL_SERVER_URL = "http://192.168.247.118:5000/detect"
NORMALIZER = 3.21


def get_user_id(request):
    header = request.META.get('HTTP_AUTHORIZATION', None)
    if header:
        access_token_str = header.strip('Bearer').strip()
        access_token = AccessToken(access_token_str)
        user_id = access_token['user_id']
    else:
        user_id = None

    return user_id


def get_food_data(food_name, user_id):
    try:
        food = Food.objects.get(romanized_name = food_name)
        food.hit += 1
        food.save()
        serialized_data = dict(FoodSerializer(food).data)
        scrap_user_id = [scrap_user.id for scrap_user in food.scrap_users.all()]
        is_liked = True if user_id in scrap_user_id else False
        serialized_data['is_liked'] = is_liked
        return serialized_data
    except Exception as e:
        result = {
            "detail" : "failed to get foot data",
            "error_log" : f"{e}"
            }
        return JsonResponse(result, status=400)

@csrf_exempt
def image_detect(request):
    if request.method == 'POST':
        try:
            image = request.FILES.get('image', None)
            data = b64encode(image.read()).decode('utf-8')
            post_data = {"img" : data}

            req = requests.post(MODEL_SERVER_URL, json=post_data)
            res = req.json()

            result_image = res.get('image', None)
            food_list = res.get('class', None)
            bbox_list = res.get('bbox', None)

            user_id = get_user_id(request)

            food_result = [get_food_data(food, user_id) for food in food_list]

            for result in food_result:
                if result == None:
                    food_result.remove(result)

            result = {
                "result_image" : result_image,
                "food_list" : food_result,
                "bbox_list" : bbox_list
                }

            return JsonResponse(result)
        except Exception as e:
            result = {
                "detail" : "image detection failed",
                "error_log" : f"{e}"
                }
            return JsonResponse(result, status=400)


def food_detail(request,romanized_name):
    if request.method == 'GET':
        try:
            food = Food.objects.get(romanized_name = romanized_name)
            serialized_data = dict(FoodSerializer(food).data)
            user_id = get_user_id(request)
            scrap_user_id = [scrap_user.id for scrap_user in food.scrap_users.all()]
            is_liked = True if user_id in scrap_user_id else False
            serialized_data['is_liked'] = is_liked
            
            return JsonResponse(serialized_data, status=200)
        except Exception as e:
            result = {
                "detail" : "failed to get foot data",
                "error_log" : f"{e}"
                }
            return JsonResponse(result, status=400)


@csrf_exempt
def food_scrap(request):
    if request.method == 'POST':
        try:
            user_id = get_user_id(request)
            romanized_food_name = json.loads(request.body).get('romanized_name')
            user = CustomUser.objects.get(id = user_id)
            food = Food.objects.get(romanized_name = romanized_food_name)
            scrap_user_id = [scrap_user.id for scrap_user in food.scrap_users.all()]
            if user_id in scrap_user_id:
                food.scrap_users.remove(user)
                food_likes_data = dict(FoodScrapSerializer(food).data)
                result = {
                    "detail" : f"{user.username} removed {food.romanized_name} from like-list",
                    "likes" : food_likes_data.get('likes')
                    }
                return JsonResponse(result)
            else:
                food.scrap_users.add(user)
                food_likes_data = dict(FoodScrapSerializer(food).data)
                result = {
                    "detail" : f"{user.username} added {food.romanized_name} into like-list",
                    "likes" : food_likes_data.get('likes')
                    }
                return JsonResponse(result)
        except Exception as e:
            result = {
                "detail" : "food_id is invalid or something went wrong",
                "error_log" : f"{e}"
                }
            return JsonResponse(result, status=400)


score_grade_dict = {
    0 : "perfect",
    1 : "great",
    2 : "good",
    3 : "bad",
    4 : "not recommend"
}


@csrf_exempt
def recommend_test(request):
    if request.method == 'POST':
        try:
            food_taste_list = Taste.objects.values_list('food__romanized_name', 'oily','spicy', 'sour', 'salty')
            food_taste_df = pd.DataFrame.from_records(food_taste_list, columns=['romanized_name', 'oily', 'spicy', 'sour', 'salty'])
            data = json.loads(request.body)
            romanized_food_name = data.get('romanized_name')
            food = Food.objects.get(romanized_name = romanized_food_name)
            oily = data.get('oily')
            spicy = data.get('spicy')
            sour = data.get('sour')
            salty = data.get('salty')
            user_taste_list = [oily, spicy, sour, salty]

            taste = food.tastes.all()[0]
            taste_list = [taste.oily, taste.spicy, taste.sour, taste.salty]
            result = map(lambda x,y : abs(x-y), user_taste_list, taste_list)
            score = sum(result) // NORMALIZER
            grade = score_grade_dict.get(score)
            recommend_foods = recommender_system(food_taste_df, user_taste_list)

            res = {
                "result" : grade,
                "recommend" : recommend_foods
            }
            return JsonResponse(res, status=200)

        except Exception as e:
            result = {
                "detail" : "Either test or recommendation has failed",
                "error_log" : f"{e}"
                }
            return JsonResponse(result, status=400)


@csrf_exempt
def save_test(request,romanized_name):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            romanized_food_name = romanized_name
            user_id = get_user_id(request)
            result = data.get('result')
            recommends = data.get('recommend')
                
            user = CustomUser.objects.get(id = user_id)
            food = Food.objects.get(romanized_name = romanized_food_name)
            recommend_1 = Food.objects.get(romanized_name = recommends[0])
            recommend_2 = Food.objects.get(romanized_name = recommends[1])

            test = Test.objects.create(
                user = user,
                food = food,
                result = result
            )
            test.recommend_foods.add(recommend_1, recommend_2)
            test.save()
            print(test.recommend_foods)

            return HttpResponse(status=201)
        except Exception as e:
            result = {
                "detail" : "Couldn't save the test result",
                "error_log" : f"{e}"
                }
            return JsonResponse(result, status=400)
        