from rest_framework import serializers
from comment.models import Comment
from account.models import CustomUser
from food.models import Food

class CommentSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(read_only=True, slug_field='username')

    class Meta:
        model = Comment
        fields = ['id', 'user', 'content', 'created_at']
    
    def create(self, validated_data):
        comment = Comment(
            content=validated_data['content']
        )
        user = CustomUser.objects.get(id=validated_data['user_id'])
        food = Food.objects.get(romanized_name=validated_data['romanized_name'])
        comment.user.add(user)
        comment.food.add(food)
        comment.save()
        return comment
