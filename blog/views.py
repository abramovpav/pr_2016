from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.views import APIView

from blog.models import Article
from blog.serializers import ArticleSerializer


class ArticlesViewSet(APIView):
    serializer_class = ArticleSerializer

    def get(self, request):
        articles = Article.objects.all()
        serializer = ArticleSerializer(articles, many=True)
        return Response(serializer.data)
