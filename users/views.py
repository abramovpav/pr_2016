from django.contrib.auth.models import User

# Create your views here.
from rest_framework.response import Response
from rest_framework.views import APIView

from users.serializers import UserSerializer


# ViewSets define the view behavior.
class UsersViewSet(APIView):
    serializer_class = UserSerializer

    def get(self, request, format=None):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)


class UserViewSet(APIView):
    serializer_class = UserSerializer

    def get(self, request, pk, format=None):
        try:
            user = User.objects.get(pk=pk)
        except User.DoesNotExist, e:
            return Response()
        serializer = UserSerializer(user)
        return Response(serializer.data)

    # def post(self, request, format=None):
    #     serializer = UserSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CurrentUserView(APIView):
    serializer_class = UserSerializer
    permission_classes = ( )

    def get(self, request, format=None):
        if request.user.is_authenticated:
            serializer = UserSerializer(request.user)
            return Response(serializer.data)
        else:
            return Response()
