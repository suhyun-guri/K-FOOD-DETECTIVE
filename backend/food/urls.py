from django.urls import path
from .views import image_detect

urlpatterns = [
    path('detect', image_detect, name='image_detect')
]