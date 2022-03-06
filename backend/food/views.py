from base64 import b64encode
import json
from django.http import JsonResponse, HttpResponse
import requests
from django.views.decorators.csrf import csrf_exempt
from food.models import Food
from account.models import CustomUser
from rest_framework_simplejwt.tokens import AccessToken
from food.serializers import FoodSerializer, FoodScrapSerializer

MODEL_SERVER_URL = "http://192.168.247.118:5000/detect"

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
        serialized_data = dict(FoodSerializer(food).data)
        scrap_user_id = [scrap_user.id for scrap_user in food.scrap_users.all()]
        is_liked = True if user_id in scrap_user_id else False
        serialized_data['is_liked'] = is_liked
        return serialized_data
    except:
        result = {"detail" : "image detection failed"}
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
        except:
            result = {"detail" : "image detection failed"}
            return JsonResponse(result, status=400)

@csrf_exempt
def food_scrap(request):
    if request.method == 'POST':
        try:
            user_id = get_user_id(request)
            food_id = json.loads(request.body).get('food_id')
            print(food_id)
            user = CustomUser.objects.get(id = user_id)
            food = Food.objects.get(id = food_id)
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
                    "detail" : f"{user.username} added {food.romanized_name} from like-list",
                    "likes" : food_likes_data.get('likes')
                    }
                return JsonResponse(result)
        except:
            result = {"detail" : "food_id is invalid or something went wrong"}
            return JsonResponse(result, status=400)
            
            




