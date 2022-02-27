from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        exclude = ['password']

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password']
        extra_kwargs = {"password": {"write_only": True}}
    
    def create(self, validated_data):
        user = CustomUser(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class LoginSerializer(TokenObtainPairSerializer):
    
    def validate(self, attrs):
        data = super().validate(attrs)

        data['user_id'] = str(self.user.id)
        data['username'] = str(self.user.username)
        data['nationality'] = str(self.user.nationality)
        data['profile_image'] = str(self.user.profile_image)

        return data

        
# class RetrieveSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CustomUser
#         exclude = ['password']

# class PatchSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CustomUser
#         exclude = ['password']

