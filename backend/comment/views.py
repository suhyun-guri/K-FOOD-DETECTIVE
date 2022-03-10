from rest_framework.generics import ListCreateAPIView
from rest_framework.mixins import DestroyModelMixin
from rest_framework_simplejwt.tokens import AccessToken
from rest_framework import status
from rest_framework.response import Response
from comment.serializers import CommentSerializer
from comment.models import Comment


def get_user_id(request):
    header = request.META.get('HTTP_AUTHORIZATION', None)
    if header:
        access_token_str = header.strip('Bearer').strip()
        access_token = AccessToken(access_token_str)
        user_id = access_token['user_id']
    else:
        user_id = None

    return user_id

class CommentView(ListCreateAPIView, DestroyModelMixin):
    serializer_class = CommentSerializer

    def get_queryset(self):
        romanized_name = self.kwargs.get('romanized_name')
        queryset = Comment.objects.filter(food__romanized_name = romanized_name)
        return queryset
    
    def create(self, request, *args, **kwargs):
        data = request.data
        data['user_id'] = get_user_id(request)
        data['romanized_name'] = self.kwargs.get('romanized_name')
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)

        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)