from django.urls import path, include
from rest_framework import routers
from . import views


# Стандартные пути сгенерированые Django REST API для просмотра данных
router = routers.DefaultRouter(trailing_slash=False)
router.register(r'idea', views.IdeaViewSet)


# пути для модуля 'laba_7'
urlpatterns = [
    path('', include(router.urls)),
    path('think', views.ThinkApiView.as_view()),
    path('search', views.SearchApiView.as_view()),
]
