from django.urls import path
from comment.views import CommentView

urlpatterns = [
    path('food/<str:romanized_name>', CommentView.as_view(), name='comment'),
    path('<int:comment_id>', CommentView.as_view(), name='comment')
]
