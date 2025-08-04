from django.urls import path
from . import views

urlpatterns = [
    path('schedule/', views.schedule_consultation, name='schedule_consultation'),
] 