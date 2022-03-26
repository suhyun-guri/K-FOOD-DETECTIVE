from django.contrib import admin
from food.models import Food, Recipe, Category, Ingredient, Taste, Test, Comment

# Register your models here.
@admin.register(Food)
class FoodAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'korean_name',
        'english_name',
        'romanized_name',
        'hit',
        'image_url'
    )

@admin.register(Recipe)
class RecipeAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'food',
        'url'
    )

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'name'
    )

@admin.register(Ingredient)
class IngredientAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'name'
    )

@admin.register(Taste)
class TasteAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'food',
        'oily',
        'spicy',
        'sour',
        'salty'
    )

@admin.register(Test)
class TestAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'user',
        'food',
        'result'
    )

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'content',
        'created_at',
        'user',
        'food'
    )
