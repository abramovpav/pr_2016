from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.db import models

# Create your models here.


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    new_field = models.CharField(max_length=64, null=True)
