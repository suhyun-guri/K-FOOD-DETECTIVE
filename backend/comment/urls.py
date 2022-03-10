from django.urls import path
from comment.views import CommentView

urlpatterns = [
    path('<str:romanized_name', CommentView.as_view(), name='comment')
]
