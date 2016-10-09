from django.contrib.auth import authenticate, login as system_login, logout as system_logout
from django.http import HttpResponseRedirect
from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView
from rest_framework.response import Response
from rest_framework.views import APIView

from auth.forms import LoginForm


class LoginPageView(TemplateView):
    template_name = 'auth/login.html'


def login(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect('/')
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = LoginForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required
            user = authenticate(username=form.cleaned_data['username'], password=form.cleaned_data['password'])
            if user is not None:
                system_login(request, user)
            else:
                return render(request, 'auth/login.html', {'form': form, 'error_message': 'Invalid username/password'})

            # redirect to a new URL:
            return HttpResponseRedirect('/')

    # if a GET (or any other method) we'll create a blank form
    else:
        form = LoginForm()

    return render(request, 'auth/login.html', {'form': form})


class LogoutView(APIView):

    def post(self, request):
        if request.user.is_authenticated:
            system_logout(request)
        return Response()
