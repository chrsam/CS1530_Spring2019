from django.db import models
from django.contrib.auth.models import User

class Course(models.Model):
    name = models.CharField(max_length=100)
    university = models.CharField(max_length=100)
    class_code = models.CharField(max_length=10)
    # owner = models.ForeignKey(User, related_name = "courses", on_delete = models.CASCADE, null = True)
