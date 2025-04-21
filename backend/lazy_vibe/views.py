from rest_framework import viewsets, permissions, views, renderers
from rest_framework.response import Response
from .models import Idea
from .serializers import IdeaSerializer


class LazyVibeView(views.APIView):
    # разрешения
    permission_classes = [permissions.AllowAny]
    # рендер вьюшки
    renderer_classes = [
        renderers.JSONRenderer,  # рендерим как json
    ]

    def get(self, request):
        content = {
            "test": True,
        }
        # ответ
        return Response(content)
    

# # Django REST вьюшки для просмотра API
class IdeaViewSet(viewsets.ModelViewSet):
    queryset = Idea.objects.all()
    serializer_class = IdeaSerializer
    permission_classes = [permissions.AllowAny]