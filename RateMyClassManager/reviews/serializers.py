from rest_framework import serializers
from reviews.models import Review
from django.contrib.auth.models import User

# Review serializers
class ReviewSerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField() # This will call get_author
    tag_list = serializers.SerializerMethodField() # This will call get_author

    def get_author(self, review):
        user = User.objects.get(id=review.owner.id)
        return user.username

    def get_tag_list(self, review):
        return review.tags.split(",")

    class Meta:
        model = Review
        fields = ('id', 'rating', 'professor', 'review', 'tag_list', 'author', 'tags')
