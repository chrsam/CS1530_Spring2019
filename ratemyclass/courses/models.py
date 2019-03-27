from django.db import models

class Course(models.Model):
    name = models.CharField(max_length=100)
    class_code = models.CharField(max_length=10, unique=True)
