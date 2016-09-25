from django.contrib import admin

# Register your models here.
from blog.models import Article


class ArticleAdmin(admin.ModelAdmin):
  pass


admin.site.register(Article)
