from rest_framework import serializers
from .models import Idea


# сериализатор модели
class IdeaSerializer(serializers.ModelSerializer):
    class Meta:
        # модель
        model = Idea
        # поля для сериализации
        fields = ["id", "raw_idea"]
        # поле только для чтения
        read_only_fields = ["id"]