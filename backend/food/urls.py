from django.urls import path
from food.views import image_detect, food_detail, food_scrap, recommend_test, save_test
from food.test_view import TestImageView

urlpatterns = [
    path('detect', image_detect, name='image_detect'),
    path('detail/<str:romanized_name>', food_detail, name='food_detail'),
    path('scrap', food_scrap, name='food_scrap'),
    path('test', recommend_test, name='recommend_test'),
    path('test/<str:romanized_name>', save_test, name='save_test'),
    path('image_test', TestImageView.as_view(), name='image_test')
]