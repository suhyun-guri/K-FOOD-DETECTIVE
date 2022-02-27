from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

def profile_directory_path(instance, filename):
    return 'profile_img/{0}/{1}'.format(instance.username, filename)


class CustomUserManager(BaseUserManager):

    use_in_migrations = True  

    def _create_user(self, username, password, profile_image, email, nationality='please set this value', gender=4, age=7, **extra_fields):
        
        values = [email, nationality, gender, age, profile_image]

        field_value_map = dict(zip(self.model.REQUIRED_FIELDS, values))
        for field_name, value in field_value_map.items():
            if not value:
                raise ValueError('The {} value must be set'.format(field_name))

        email = self.normalize_email(email)
        user = self.model(
            username=username,
            email=email,
            nationality=nationality,
            gender=gender,
            age=age,
            profile_image=profile_image,
            **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, username, password, email, profile_image, nationality='please set this value', gender=4, age=7,  **extra_fields):
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(username, password, email, nationality, gender, age, profile_image, **extra_fields)

    def create_superuser(self, username, password, profile_image, email="admin@admin.com", nationality='please set this value', gender=4, age=7, **extra_fields):
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(username, password, email, nationality, gender, age, profile_image, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    
    class GenderChoice(models.IntegerChoices):
        male = 0, 'male'
        female = 1, 'female'
        other = 2, 'other'
        empty = 4, 'please set this value'

    
    class AgeChoice(models.IntegerChoices):
        underTwenty = 0, '0~19'
        twenties = 1, '20~29'
        thirties = 2, '30~39'
        forties = 3, '40~49'
        fifties = 4, '50~59'
        sixties = 5, '60~69'
        overSixty = 6, '60~'
        empty = 7, 'please set this value'

    username = models.CharField(unique=True, max_length=25)
    email = models.EmailField(unique=True)
    nationality = models.CharField(default='please set this value', max_length=25, blank=True)
    gender = models.SmallIntegerField(choices=GenderChoice.choices, default=GenderChoice.empty, blank=True)
    age = models.SmallIntegerField(choices=AgeChoice.choices, default=AgeChoice.empty, blank=True)
    profile_image = models.ImageField(upload_to=profile_directory_path, default='profile/default_img.jpg')
    is_superuser = models.BooleanField(default=False)
    date_joined = models.DateField(auto_now_add=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.username


