from django.conf.urls import url

from blog.views import ArticlesViewSet

urlpatterns = [
    url(r'^articles', ArticlesViewSet.as_view())
]