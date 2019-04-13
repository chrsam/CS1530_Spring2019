from courses.models import Course
from rest_framework import viewsets, permissions
from .serializers import CourseSerializer

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    permissions_classes = [
        permissions.IsAuthenticated
        # permissions.AllowAny
    ]
    serializer_class = CourseSerializer

    def get_queryset(self):
        queryset = Course.objects.all()
        course_id = self.request.query_params.get('id', None)
        if course_id is not None:
            queryset = queryset.filter(id=course_id)
        return queryset
    #
    # def perform_create(self, serializer):
    #     serializer.save(owner = self.request.user)
