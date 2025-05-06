from django.db import models 
from django.utils import timezone

# https://medium.com/xgeeks/timestamps-and-soft-delete-with-django-65f74d86e022
class Timestampable(models.Model):
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        abstract = True
        
class SoftDeletes(models.Model):
    deleted_at = models.DateTimeField(null=True)
    class Meta:
        abstract = True

class Idea(Timestampable, SoftDeletes, models.Model):
    name = models.TextField(
        verbose_name="Название",
        help_text="Название",
    )
    description = models.TextField(
        verbose_name="Описание",
        help_text="Описание",
    )
    time = models.TextField(
        verbose_name="Время для реализации",
        help_text="Время для реализации",
        null=True,
    )
    instruction = models.TextField(
        verbose_name="Инструкция",
        help_text="Инструкция",
        null=True,
    )