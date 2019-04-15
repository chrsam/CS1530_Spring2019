from rest_framework import serializers
from courses.models import Course
from reviews.models import Review

# Course serializers
class CourseSerializer(serializers.ModelSerializer):
    average_rating = serializers.SerializerMethodField() # This will call get_average_rating
    num_reviews = serializers.SerializerMethodField() # This will call get_num_reviews
    tags = serializers.SerializerMethodField() # This will call get_tags

    def get_average_rating(self, course):
        reviews = Review.objects.filter(course=course)
        total_stars = 0
        for review in reviews:
            total_stars = total_stars + review.rating
        if len(reviews) > 0:
            return total_stars / len(reviews)
        else:
            return None

    def get_num_reviews(self, course):
        return len(Review.objects.filter(course=course))

    def get_tags(self, course):
        reviews = Review.objects.filter(course=course)
        tags = []
        for review in reviews:
            for tag in review.tags.split(","):
                tag = tag.lower()
                if tag != "" and tag not in tags:
                    tags.append(tag)
        return tags

    class Meta:
        model = Course
        fields = ('id', 'name', 'university', 'class_code', 'average_rating', 'num_reviews', 'tags')

