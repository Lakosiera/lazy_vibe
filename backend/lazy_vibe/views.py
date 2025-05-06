from rest_framework import viewsets, permissions, views, renderers
from rest_framework.response import Response
from rest_framework.decorators import action
from django.utils import timezone
from .models import Idea, SoftDeletes
from .serializers import IdeaSerializer


class ThinkApiView(views.APIView):
    # разрешения
    permission_classes = [permissions.AllowAny]
    # рендер вьюшки как json
    renderer_classes = [renderers.JSONRenderer]

    def get(self, request):
        objects = Idea.objects.first()
        serializer = IdeaSerializer(
            objects,
            many=False,  # как один
        )
        return Response(serializer.data)


class SearchApiView(views.APIView):
    # разрешения
    permission_classes = [permissions.AllowAny]
    # рендер вьюшки как json
    renderer_classes = [renderers.JSONRenderer]

    def get(self, request):
        # TODO тут алгоритм поиска 
        objects = Idea.objects.all()
        serializer = IdeaSerializer(
            objects,
            many=True,  # как список
        )
        return Response(serializer.data)


# https://www.django-rest-framework.org/api-guide/viewsets/
# Django REST вьюшки для просмотра API
class IdeaViewSet(viewsets.ModelViewSet):
    queryset = Idea.objects.all()
    serializer_class = IdeaSerializer
    permission_classes = [permissions.AllowAny]

    @action(detail=False, methods=['GET'], name='Test action')
    def some_action(self, request, *args, **kwargs):
        queryset = Idea.objects.last()

        serializer = self.get_serializer(queryset, many=False)
        return Response(serializer.data)

    # действие при удалении
    def perform_destroy(self, instance):
        instance.deleted_at = timezone.now()
        instance.save()

    def get_queryset(self):
        return Idea.objects.filter(deleted_at=None)