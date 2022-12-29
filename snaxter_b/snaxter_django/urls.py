from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from snaxter.views import RestaurantView, MenuItemView

route = routers.DefaultRouter()
route.register('restaurants', RestaurantView, basename='restaurantsview')
route.register('menu_items', MenuItemView, basename='menu_itemsview')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(route.urls)),
    path('api-auth/', include('rest_framework.urls'), name='rest_framework'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)