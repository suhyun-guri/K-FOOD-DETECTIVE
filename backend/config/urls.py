from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/admin/', admin.site.urls),
    path('api/account/', include('account.urls')),
    path('api/food/', include('food.urls')),
    path('api/comment/', include('comment.urls')),
    path('api/mypage/', include('mypage.urls'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
