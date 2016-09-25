# Serializers define the API representation.
from rest_framework import serializers

from blog.models import Article


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'title', 'text', 'author')
