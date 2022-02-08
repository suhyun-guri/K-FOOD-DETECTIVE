from django.db import models


class Users(models.Model):
    name = models.CharField(max_length=200)
    age = models.IntegerField(default=0)
