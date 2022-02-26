from rest_framework import viewsets
from .models import CustomUser
from .serializers import CustomUserSerializer, RegisterSerializer

class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    
    def get_serializer_class(self):
        if self.action == 'create':
            return RegisterSerializer
        else:
            return CustomUserSerializer