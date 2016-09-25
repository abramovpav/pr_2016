from django.conf.urls import url, include

from .import views

urlpatterns = [
    url(r'^users/', include('users.urls')),
    url(r'^auth/', include('auth.api_urls')),
    url(r'^blog/', include('blog.urls')),
]