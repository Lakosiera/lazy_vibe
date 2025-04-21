from django.contrib import admin
from .models import Idea

# класс обвертка над моделью для работы в админке
class IdeaAdmin(admin.ModelAdmin):
    # отображаем поля обьекта в админке
    list_display = ('id', 'raw_idea')


# регистрируем классы моделей бля работы с ними в админке
admin.site.register(Idea, IdeaAdmin)