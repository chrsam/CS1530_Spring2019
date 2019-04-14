from rest_framework import serializers
from reviews.models import Review
from django.contrib.auth.models import User

# Review serializers
class ReviewSerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField() # This will call get_author

    def get_author(self, review):
        user = User.objects.get(id=review.owner.id)
        return user.username

    class Meta:
        model = Review
        fields = ('id', 'rating', 'professor', 'review', 'author')
