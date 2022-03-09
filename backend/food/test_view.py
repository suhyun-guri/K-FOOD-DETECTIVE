from rest_framework.generics import ListAPIView
from rest_framework import serializers
from food.models import Food

class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = ['romanized_name', 'image_url']

class TestImageView(ListAPIView):
    queryset = Food.objects.all()
    serializer_class = TestSerializer