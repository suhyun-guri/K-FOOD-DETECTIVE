from django.contrib import admin
from .models import CustomUser

# Register your models here.
@admin.register(CustomUser)
class UserAdmin(admin.ModelAdmin):

    list_display = (
        'username',
        'email',
        'nationality',
        'gender',
        'age',
        'profile_image',
        'is_superuser',
        'is_staff',
        'date_joined',
    )
