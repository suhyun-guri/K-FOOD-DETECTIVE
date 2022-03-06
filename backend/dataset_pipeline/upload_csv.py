import sys
import os
import django 
sys.path.append(os.path.dirname(os.path.dirname(os.path.realpath(__file__))))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

import csv
from food.models import Food, Taste, Recipe, Category, Ingredient

with open('food_dataset.csv') as csvfile:
    reader = csv.DictReader(csvfile)
    cnt = 1
    for row in reader:
        try:
            korean_name = row['korean_name']
            romanized_name = row['romanized_name']
            english_name = row['english_name']
            categories = row['categories']
            ingredients = row['made_with']
            image_url = row['img_link']
            info = row['info']
            recipe = row['recipe_link']
            spicy = row['spicy']
            sour = row['sour']
            salty = row['salty']
            oily = row['oily']

            # get_or_create => return (object, created_or_not)
            food_instance = Food.objects.get_or_create(
                korean_name = korean_name,
                romanized_name = romanized_name,
                english_name = english_name,
                image_url = image_url,
                info = info
            )

            Taste.objects.get_or_create(
                spicy = spicy,
                sour = sour,
                salty = salty,
                oily = oily,
                food = food_instance[0]
            )
            
            Recipe.objects.get_or_create(
                url = recipe,
                food = food_instance[0]
            )

            for category in categories.split(','):
                category_instance = Category.objects.get_or_create(
                    name = category.strip()
                )
                food_instance[0].categories.add(category_instance[0])
            
            for ingredient in ingredients.split(','):
                ingredient_instance = Ingredient.objects.get_or_create(
                    name = ingredient.strip()
                )
                food_instance[0].ingredients.add(ingredient_instance[0])
            
            cnt += 1

        except:
            print(f"error occured at row#{cnt}")
            cnt += 1


