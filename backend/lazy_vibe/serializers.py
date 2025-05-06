from rest_framework import serializers
from .models import Idea


# сериализатор модели
class IdeaSerializer(serializers.ModelSerializer):
    class Meta:
        # модель
        model = Idea
        # поля для сериализации
        fields = "__all__"
        # поле только для чтения
        read_only_fields = ["id", "created_at", "updated_at", "deleted_at"]