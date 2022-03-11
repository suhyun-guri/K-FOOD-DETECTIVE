from rest_framework import serializers
from rest_framework.generics import get_object_or_404
from rest_framework.exceptions import APIException
from rest_framework import status

from food.models import Comment
from account.models import CustomUser
from food.models import Food


class NotAuthenticatedException(APIException):
    status_code = status.HTTP_401_UNAUTHORIZED
    default_detail = "User is unauthorized. Check if Bearer Token is valid"
    default_code = 'authentication_failed'

class CommentUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'profile_image']

class CommentSerializer(serializers.ModelSerializer):
    user = CommentUserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ['id', 'user', 'content', 'created_at']
    
    def create(self, validated_data):
        user_id = self.context['user_id']
        if user_id != None:
            romanized_name = self.context['romanized_name']
            validated_data['user'] = get_object_or_404(CustomUser,id=user_id)
            validated_data['food'] = get_object_or_404(Food,romanized_name=romanized_name)
            comment = super().create(validated_data)
            return comment
        else:
            raise NotAuthenticatedException()