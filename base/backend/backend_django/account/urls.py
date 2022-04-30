from django.urls import path
from . import views

urlpatterns = [
    path('get-user/', views.GetUser.as_view(), name='get-user'),
    path('register-user/', views.RegisterUser.as_view(), name='register-user'),
]
