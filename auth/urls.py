from django.conf.urls import url

from auth.views import login

urlpatterns = [
    url(r'^login$', login, name='login'),
]
