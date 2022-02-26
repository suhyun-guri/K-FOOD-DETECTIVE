from os import path
from .views import CustomUserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'users', CustomUserViewSet)

urlpatterns = [
] + router.urls