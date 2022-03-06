from django.urls import path
from .views import image_detect, food_scrap

urlpatterns = [
    path('detect', image_detect, name='image_detect'),
    path('scrap', food_scrap, name='food_scrap')
]