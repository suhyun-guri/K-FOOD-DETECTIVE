from django.urls import path
from .views import image_detect, food_scrap, recommend_test

urlpatterns = [
    path('detect', image_detect, name='image_detect'),
    path('scrap', food_scrap, name='food_scrap'),
    path('test', recommend_test, name='recommend_test')
]