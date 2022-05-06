from django.urls import path
from . import views

urlpatterns = [
    path('budget-details/', views.BudgetDetails.as_view(), name='budget-details'),
    path('budget-input/', views.BudgetInput.as_view(), name='budget-input'),
    path('budget-update/<str:pk>/', views.BudgetUpdate.as_view(), name='budget-update'),
    path('budget-delete/<str:pk>/', views.BudgetDelete.as_view(), name='budget-delete'),
    path('budget-pie/<str:pk>/', views.pieBudgetDetails.as_view(), name='budget-pie'),
]
