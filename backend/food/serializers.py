from rest_framework import serializers
from food.models import Food, Recipe, Ingredient, Category


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'      

class FoodSerializer(serializers.ModelSerializer):
    # recipes = RecipeSerializer(read_only=True, many=True)
    # ingredients = IngredientSerializer(read_only=True, many=True)
    # categories = CategorySerializer(read_only=True, many=True)
    recipes = serializers.SlugRelatedField(many=True, read_only=True, slug_field='url')
    ingredients = serializers.SlugRelatedField(many=True, read_only=True, slug_field='name')
    categories = serializers.SlugRelatedField(many=True, read_only=True, slug_field='name')
    likes = serializers.IntegerField(source = "scrap_users.count", read_only=True)

    class Meta:
        model = Food
        fields = ['korean_name','english_name','romanized_name','hit','image_url','recipes','ingredients','categories','likes','info']

class FoodScrapSerializer(serializers.ModelSerializer):
    likes = serializers.IntegerField(source = "scrap_users.count", read_only=True)
    
    class Meta:
        model = Food
        fields = ['likes']