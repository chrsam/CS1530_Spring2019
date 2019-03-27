from courses.models import Course
from rest_framework import viewsets, permissions
from .serializers import CourseSerializer

class CourseViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = CourseSerializer

    def get_queryset(self):
        return self.request.user.courses.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


