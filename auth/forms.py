from django import forms


class LoginForm(forms.Form):
    auto_id = False
    username = forms.CharField(label='', max_length=20, min_length=5,
                               widget=forms.TextInput(attrs={'placeholder': 'Username'}))
    password = forms.CharField(label='', max_length=32, min_length=8,
                               widget=forms.PasswordInput(attrs={'placeholder': 'Password'}))
