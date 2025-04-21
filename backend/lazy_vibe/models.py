from django.db import models

class Idea(models.Model):
    raw_idea = models.TextField(
        verbose_name="Концепт идеи",
        help_text="Концепт идеи",
    )
