from django.db import models


class Food(models.Model):
    class Meta:
        db_table = 'food'
    
    def __str__(self):
        return self.romanized_name
    
    korean_name = models.CharField(unique=True, max_length=255)
    english_name = models.CharField(unique=True, max_length=255)
    romanized_name = models.CharField(unique=True, max_length=255)
    hit = models.IntegerField(default=0)
    image_url = models.URLField(max_length=500)
    info = models.CharField(max_length=1000)
    scrap_users = models.ManyToManyField('account.CustomUser', related_name='scrap_foods', db_table='scrap') 
    test_users = models.ManyToManyField('account.CustomUser', related_name='test_foods', through='Test')
    comment_users = models.ManyToManyField('account.CustomUser', related_name='comment_foods', through='Comment')



class Recipe(models.Model):
    class Meta:
        db_table = 'recipe'
    
    def __str__(self):
        return f"recipe instance of {self.food.romanized_name}"
    
    food = models.ForeignKey(Food, on_delete=models.CASCADE, related_name='recipes')
    url = models.URLField(max_length=500)

class Category(models.Model):
    class Meta:
        db_table = 'category'

    def __str__(self):
        return self.name
    
    foods = models.ManyToManyField(Food, related_name='categories')
    name = models.CharField(unique=True, max_length=255)

class Ingredient(models.Model):
    class Meta:
        db_table = 'ingredient'
    
    def __str__(self):
        return self.name

    foods = models.ManyToManyField(Food, related_name='ingredients')
    name = models.CharField(unique=True, max_length=255)

class Taste(models.Model):
    class Meta:
        db_table = 'taste'
    
    def __str__(self):
        return f"taste instance of {self.food.romanized_name}"
    
    food = models.ForeignKey(Food, on_delete=models.CASCADE, related_name='tastes')
    oily = models.SmallIntegerField()
    spicy = models.SmallIntegerField()
    sour = models.SmallIntegerField()
    salty = models.SmallIntegerField()

class Test(models.Model):
    class Meta:
        db_table = 'test'
    
    def __str__(self):
        return f"{self.id}-{self.user.username}-{self.food.romanized_name}-{self.result}"
    

    class ResultChoice(models.IntegerChoices):
        perfect = 0, 'perfect'
        great = 1, 'great'
        good = 2, 'good'
        bad = 3, 'bad'
        not_recommend = 4, 'not recommend'
    
    user = models.ForeignKey('account.CustomUser', on_delete=models.CASCADE, related_name='tests')
    food = models.ForeignKey(Food, on_delete=models.CASCADE, related_name='tests')
    result = models.SmallIntegerField(choices=ResultChoice.choices)
    recommend_foods = models.ManyToManyField(Food, related_name='recommend_tests', db_table='recommend') 


class Comment(models.Model):
    class Meta:
        db_table = 'comment'
    
    def __str__(self):
        return f"{self.id}-{self.user.username}-{self.content[:10]}"
    
    content = models.CharField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey('account.CustomUser', on_delete=models.CASCADE, related_name='comments')
    food = models.ForeignKey('food.Food', on_delete=models.CASCADE, related_name='comments')