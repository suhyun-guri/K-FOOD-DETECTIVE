from rest_framework.generics import RetrieveUpdateAPIView, get_object_or_404
from rest_framework_simplejwt.tokens import AccessToken
from mypage.serializers import CommentSerializer, FoodSerializer, TestSerializer, CustomUserSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTTokenUserAuthentication

from food.models import Comment
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

@api_view(['GET'])
@authentication_classes([JWTTokenUserAuthentication])
@permission_classes([IsAuthenticated])
def get_user_comments(request):
    if request.method == 'GET':
        user_id = get_user_id(request)
        comments = Comment.objects.filter(user__id = user_id)
        serializer = CommentSerializer(data=comments, many=True)
        serializer.is_valid()
        return Response(data=serializer.data, status=200)


@api_view(['GET'])
@authentication_classes([JWTTokenUserAuthentication])
@permission_classes([IsAuthenticated])
def get_user_scraps(request):
    if request.method == 'GET':
        user_id = get_user_id(request)
        user = get_object_or_404(CustomUser, id = user_id)
        serializer = FoodSerializer(data=user.scrap_foods.all(), many=True)
        serializer.is_valid()
        return Response(data=serializer.data, status=200)

@api_view(['GET'])
@authentication_classes([JWTTokenUserAuthentication])
@permission_classes([IsAuthenticated])
def get_user_tests(request):
    if request.method == 'GET':
        user_id = get_user_id(request)
        user = get_object_or_404(CustomUser, id = user_id)
        serializer = TestSerializer(data=user.tests.all(), many=True)
        serializer.is_valid()
        return Response(data=serializer.data, status=200)

@authentication_classes([JWTTokenUserAuthentication])
@permission_classes([IsAuthenticated])
class AccountView(RetrieveUpdateAPIView):
    serializer_class = CustomUserSerializer

    def get_object(self):
        request = self.request
        user_id = get_user_id(request)
        instance = get_object_or_404(CustomUser, id = user_id)
        return instance
