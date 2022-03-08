from django.db import models
from account.models import CustomUser


class Food(models.Model):
    class Meta:
        db_table = 'food'
    
    korean_name = models.CharField(unique=True, max_length=255)
    english_name = models.CharField(unique=True, max_length=255)
    romanized_name = models.CharField(unique=True, max_length=255)
    hit = models.IntegerField(default=0)
    image_url = models.URLField(max_length=500)
    info = models.CharField(max_length=1000)
    scrap_users = models.ManyToManyField(CustomUser, related_name='scrap_foods', db_table='scrap') 


class Recipe(models.Model):
    class Meta:
        db_table = 'recipe'
    
    food = models.ForeignKey(Food, on_delete=models.CASCADE, related_name='recipes')
    url = models.URLField(max_length=500)

class Category(models.Model):
    class Meta:
        db_table = 'category'
    
    foods = models.ManyToManyField(Food, related_name='categories')
    name = models.CharField(unique=True, max_length=255)

class Ingredient(models.Model):
    class Meta:
        db_table = 'ingredient'
    
    foods = models.ManyToManyField(Food, related_name='ingredients')
    name = models.CharField(unique=True, max_length=255)

class Taste(models.Model):
    class Meta:
        db_table = 'taste'
    
    food = models.ForeignKey(Food, on_delete=models.CASCADE, related_name='tastes')
    oily = models.SmallIntegerField()
    spicy = models.SmallIntegerField()
    sour = models.SmallIntegerField()
    salty = models.SmallIntegerField()

class Test(models.Model):
    class Meta:
        db_table = 'test'

    class ResultChoice(models.IntegerChoices):
        perfect = 0, 'perfect'
        great = 1, 'great'
        good = 2, 'good'
        bad = 3, 'bad'
        not_recommend = 4, 'not recommend'
    
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    food = models.ForeignKey(Food, on_delete=models.CASCADE)
    result = models.SmallIntegerField(choices=ResultChoice.choices)
    recommend_foods = models.ManyToManyField(Food, related_name='recommend_tests', db_table='recommend') 
