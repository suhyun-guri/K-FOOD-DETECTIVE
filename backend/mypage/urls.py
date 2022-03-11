from django.urls import path
from mypage.views import get_user_comments, get_user_scraps, get_user_tests, AccountView

urlpatterns = [
    path('comments', get_user_comments, name='get_user_comments'),
    path('favorites', get_user_scraps, name='get_user_scraps'),
    path('tests', get_user_tests, name='get_user_tests'),
    path('account', AccountView.as_view(), name='account'),
]