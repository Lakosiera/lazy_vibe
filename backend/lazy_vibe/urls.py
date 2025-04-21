from django.urls import path, include
from rest_framework import routers
from . import views


# Стандартные пути сгенерированые Django REST API для просмотра данных
router = routers.DefaultRouter()
router.register(r'idea', views.IdeaViewSet)


# пути для модуля 'laba_7'
urlpatterns = [
    path('router/', include(router.urls)),
    path('', views.LazyVibeView.as_view()),
]
