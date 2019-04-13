from reviews.models import Review
from rest_framework import viewsets, permissions
from .serializers import ReviewSerializer
from courses.models import Course

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    permissions_classes = [
        permissions.IsAuthenticated
        # permissions.AllowAny
    ]
    serializer_class = ReviewSerializer

    def get_queryset(self):
        queryset = Review.objects.all()
        course_id = self.request.query_params.get('course_id', None)
        if course_id is not None:
            # Get the course object and then get all its reviews
            queryset = Course.objects.get(id=course_id).reviews.all()
        else:
            queryset = Review.objects.none()
        return queryset
    #
    # def perform_create(self, serializer):
    #     serializer.save(owner = self.request.user)
