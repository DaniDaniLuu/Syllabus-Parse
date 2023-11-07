from django.urls import path
from . import views

urlpatterns = [
    path('', views.pdf_handling, name='pdf_handling'),
]