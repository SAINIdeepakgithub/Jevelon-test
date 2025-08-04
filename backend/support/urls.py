from django.urls import path
from . import views

urlpatterns = [
    path('submit/', views.submit_support_ticket, name='submit_support_ticket'),
    path('tickets/', views.get_support_tickets, name='get_support_tickets'),
] 