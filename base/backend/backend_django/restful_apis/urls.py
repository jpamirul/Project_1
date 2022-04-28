from django.urls import path
from . import views

urlpatterns = [
    path('budget-details/<str:pk>/', views.BudgetDetails.as_view(), name='budget-details'),
    path('budget-input/', views.BudgetInput.as_view(), name='budget-input'),
    path('budget-update/<str:pk>/', views.BudgetUpdate.as_view(), name='budget-update'),
    path('budget-delete/<str:pk>/', views.BudgetDelete.as_view(), name='budget-delete'),
]
