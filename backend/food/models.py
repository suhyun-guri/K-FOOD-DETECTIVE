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
