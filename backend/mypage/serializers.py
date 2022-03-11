from rest_framework import serializers
from account.models import CustomUser
from food.models import Food, Comment, Test

class FoodSerializer(serializers.ModelSerializer):
    categories = serializers.SlugRelatedField(many=True, read_only=True, slug_field='name')

    class Meta:
        model = Food
        fields = ['korean_name', 'english_name', 'romanized_name', 'categories', 'image_url']

class CommentSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(read_only=True, slug_field='username')
    food = FoodSerializer(read_only=True)
    created_at = serializers.DateTimeField(format="%Y-%m-%d")

    class Meta:
        model = Comment
        fields = ['food', 'user', 'content', 'created_at']

class TestSerializer(serializers.ModelSerializer):
    food = FoodSerializer(read_only=True)
    recommend_foods = serializers.SlugRelatedField(read_only=True, many=True, slug_field='romanized_name')

    class Meta:
        model = Test
        fields = ['food', 'result', 'recommend_foods']

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["username", "nationality", "age", "email", "gender", "profile_image"]