from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView


class HomePageView(TemplateView):
    template_name = 'main/index.html'  # 'main/index.html'
