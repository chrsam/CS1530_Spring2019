from django.db import models
from django.contrib.auth.models import User
from courses.models import Course

class Review(models.Model):
    #id = serializers.ModelField(model_field=Review._meta.get_field('id'), required=False) 
    rating = models.IntegerField()
    professor = models.CharField(max_length=50)
    review = models.CharField(max_length=1000)
    course = models.ForeignKey(Course, related_name = "reviews", on_delete = models.CASCADE)
    owner = models.ForeignKey(User, related_name = "reviews", on_delete = models.CASCADE)

    #def save_model(self, request, obj, form, change):
    #    if getattr(obj, 'owner', None) is None:
    #        obj.owner = request.user
    #    obj.save()
