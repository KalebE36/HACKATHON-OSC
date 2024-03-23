from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_view, name='home'),
    # Define other URLs for app_b here
]