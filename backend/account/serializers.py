from rest_framework import serializers
from .models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        exclude = ['password']

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password']

# class RetrieveSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CustomUser
#         exclude = ['password']

# class PatchSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CustomUser
#         exclude = ['password']

    # def create(self, validated_data):
    #     user = CustomUser(
    #         username=validated_data['username'],
    #         email=validated_data['email']
    #     )
    #     user.set_password(validated_data['password'])
    #     user.save()
    #     return user