from rest_framework import viewsets
from django.shortcuts import render
from .models import Restaurant, MenuItem
from .serializers import RestaurantSerializer, MenuItemSerializer

class MenuItemView(viewsets.ModelViewSet):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer

class RestaurantView(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
