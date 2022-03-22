from urllib import request
from rest_framework.generics import RetrieveUpdateAPIView,ListAPIView, get_object_or_404
from rest_framework.mixins import DestroyModelMixin, RetrieveModelMixin
from rest_framework_simplejwt.tokens import AccessToken
from mypage.serializers import CommentSerializer, FoodSerializer, TestSerializer, CustomUserSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTTokenUserAuthentication
from rest_framework import status

from food.models import Comment, Food, Test
from account.models import CustomUser


def get_user_id(request):
    header = request.META.get('HTTP_AUTHORIZATION', None)
    if header:
        access_token_str = header.strip('Bearer').strip()
        access_token = AccessToken(access_token_str)
        user_id = access_token['user_id']
    else:
        user_id = None
    return user_id


@authentication_classes([JWTTokenUserAuthentication])
@permission_classes([IsAuthenticated])
class UserCommentsView(ListAPIView, DestroyModelMixin):
    serializer_class = CommentSerializer

    def get_queryset(self):
        user_id = get_user_id(self.request)
        queryset = Comment.objects.filter(user__id = user_id).all()
        return queryset

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
    
    def destroy(self, request, *args, **kwargs):
        user_id = get_user_id(request)
        comment_id = self.kwargs.get('pk')
        instance = get_object_or_404(Comment, id=comment_id)
        if instance.user.id == user_id:
            self.perform_destroy(instance)
            result = self.get_queryset()
            serializer = self.get_serializer(result, many=True)
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        else:
            result = {"detail" : "삭제 권한이 없습니다."}
            return Response(data=result, status=status.HTTP_401_UNAUTHORIZED)


@authentication_classes([JWTTokenUserAuthentication])
@permission_classes([IsAuthenticated])
class UserScrapView(ListAPIView, DestroyModelMixin):
    serializer_class = FoodSerializer

    def get_queryset(self):
        user_id = get_user_id(self.request)
        user = get_object_or_404(CustomUser, id = user_id)
        queryset = user.scrap_foods.all()
        return queryset

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
    
    def destroy(self, request, *args, **kwargs):
        user_id = get_user_id(request)
        user = get_object_or_404(CustomUser, id = user_id)
        romanized_name = self.kwargs.get('romanized_name')
        food_instance = get_object_or_404(Food, romanized_name = romanized_name)
        if user in food_instance.scrap_users.all():
            food_instance.scrap_users.remove(user)
            result = self.get_queryset()
            serializer = self.get_serializer(result, many=True)
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        else:
            result = {"detail" : "스크랩하지 않은 음식입니다."}
            return Response(data=result, status=status.HTTP_404_NOT_FOUND)


@authentication_classes([JWTTokenUserAuthentication])
@permission_classes([IsAuthenticated])
class UserTestView(ListAPIView, DestroyModelMixin):
    serializer_class = TestSerializer

    def get_queryset(self):
        user_id = get_user_id(self.request)
        user = get_object_or_404(CustomUser, id = user_id)
        queryset = user.tests.all()
        return queryset

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
    
    def destroy(self, request, *args, **kwargs):
        user_id = get_user_id(request)
        test_id = self.kwargs.get('pk')
        instance = get_object_or_404(Test, id=test_id)
        if instance.user.id == user_id:
            self.perform_destroy(instance)
            result = self.get_queryset()
            serializer = self.get_serializer(result, many=True)
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        else:
            result = {"detail" : "삭제 권한이 없습니다."}
            return Response(data=result, status=status.HTTP_401_UNAUTHORIZED)


@authentication_classes([JWTTokenUserAuthentication])
@permission_classes([IsAuthenticated])
class AccountView(RetrieveUpdateAPIView):
    serializer_class = CustomUserSerializer

    def get_object(self):
        request = self.request
        user_id = get_user_id(request)
        instance = get_object_or_404(CustomUser, id = user_id)
        return instance
