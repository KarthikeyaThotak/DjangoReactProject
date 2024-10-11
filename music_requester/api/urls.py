from django.urls import path
from .views import RoomView
from .views import RoomCreate

urlpatterns = [
    path('room', RoomView.as_view()),
    path('create', RoomCreate.as_view()),
]
