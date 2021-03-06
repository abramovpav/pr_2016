from django.conf.urls import url
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token

from auth.views import LogoutView

urlpatterns = [
    url(r'^logout$', LogoutView.as_view(), name='logout'),
    url(r'^login$', obtain_jwt_token),
    url(r'^token-refresh$', refresh_jwt_token),
    url(r'^token-verify$', verify_jwt_token),
]
