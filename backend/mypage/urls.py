from django.urls import path
from mypage.views import UserScrapView, UserTestView, AccountView, UserCommentsView

urlpatterns = [
    path('comments', UserCommentsView.as_view(), name='UserCommentsList'),
    path('comments/<int:pk>', UserCommentsView.as_view(), name='UserCommentDelete'),
    path('favorites', UserScrapView.as_view(), name='UserScrapList'),
    path('favorites/<str:romanized_name>', UserScrapView.as_view(), name='UserScrapDelete'),
    path('tests', UserTestView.as_view(), name='UserTestsList'),
    path('tests/<int:pk>', UserTestView.as_view(), name='UserTestsDelete'),
    path('account', AccountView.as_view(), name='account'),
]