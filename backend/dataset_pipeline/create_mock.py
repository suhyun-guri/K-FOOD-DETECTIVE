import sys
import os
import django 
import random

sys.path.append(os.path.dirname(os.path.dirname(os.path.realpath(__file__))))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from account.models import CustomUser
from food.models import Food, Test

for i in range(1,6):
    user = CustomUser.objects.get_or_create(
        username = f"test_user_{i}",
        email = f"test_{i}@test.com",
        password = "password",
        nationality = "South Korea",
        gender = 1,
        age = 2,
    )
    rand_seed_list = [random.randint(1,80) for i in range(3)]
    food_list = [Food.objects.get(id=rand_seed_list[i]) for i in range(3)]
    user[0].scrap_foods.add(food_list[0])

    test = Test.objects.create(
        user = user[0],
        food = food_list[0],
        result = random.randint(0,4)
    )
    test.recommend_foods.add(food_list[1], food_list[2])

    


