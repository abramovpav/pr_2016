from django.conf.urls import url

from main.views import HomePageView

urlpatterns = [
    url('$', HomePageView.as_view())
]
