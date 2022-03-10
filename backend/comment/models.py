from django.db import models


class Comment(models.Model):
    class Meta:
        db_table = 'comment'
    
    def __str__(self):
        return f"{self.id}-{self.user.username}-{self.content[:10]}"
    
    content = models.CharField(max_length=1000)
    date_joined = models.DateField(auto_now_add=True)
    user = models.ForeignKey('account.CustomUser', on_delete=models.CASCADE, related_name='comments')
    food = models.ForeignKey('food.Food', on_delete=models.CASCADE, related_name='comments')