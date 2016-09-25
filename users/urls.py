from django.conf.urls import url

from users.views import UsersViewSet
from users.views import UserViewSet, CurrentUserView


urlpatterns = [
    url(r'^(?P<pk>\d+)$', UserViewSet.as_view()),
    url(r'^current$', CurrentUserView.as_view()),
    url(r'^$', UsersViewSet.as_view()),
]