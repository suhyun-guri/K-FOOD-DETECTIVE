from rest_framework.generics import ListCreateAPIView, get_object_or_404
from rest_framework.mixins import DestroyModelMixin
from rest_framework_simplejwt.tokens import AccessToken
from comment.serializers import CommentSerializer
from rest_framework.response import Response
from rest_framework import status


from food.models import Comment


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
    lookup_url_kwarg = 'romanized_name', 'comment_id'

    def get_queryset(self):
        romanized_name = self.kwargs.get('romanized_name')
        queryset = Comment.objects.filter(food__romanized_name = romanized_name)
        return queryset

    def get_serializer_context(self):
        context = super().get_serializer_context()
        user_id = get_user_id(self.request)
        romanized_name = self.kwargs.get('romanized_name')
        comment_id = self.kwargs.get('comment_id')
        context['user_id'] = user_id
        context['romanized_name'] = romanized_name
        context['comment_id'] = comment_id
        return context

    def create(self, request, *args, **kwargs):
        result = super().create(request, *args, **kwargs)
        data = self.get_queryset()
        serializer = self.get_serializer(data=data, many=True)
        serializer.is_valid()
        result.data = serializer.data
        return result
    
    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
    
    def destroy(self, request, *args, **kwargs):
        user_id = get_user_id(request)
        comment_id = self.kwargs.get('comment_id')
        instance = get_object_or_404(Comment, id=comment_id)
        if instance.user.id == user_id:
            self.perform_destroy(instance)
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            result = {"detail" : "User is unauthorized. Check if Bearer Token is valid"}
            return Response(data=result, status=status.HTTP_401_UNAUTHORIZED)