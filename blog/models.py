from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.db import models

# Create your models here.


class Article(models.Model):
    title = models.CharField(max_length=128)
    text = models.TextField(max_length=1024)
    created_date = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User)
