function LoginViewModel() {
    var self = this;
    this.credentials = ko.observable({username: "abramau2", password: ''});

    this.loginError = ko.observable(false);

    this.onLogin = function () {
        console.log('login', this.credentials());
        $.ajax({
            url: "/api_v0/auth/login",
            method: 'POST',
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(this.credentials()),
            success: function (response) {
                self.loginError(false);
                console.log('s', response);
                jQuery.cookie('jwt-token', ko.toJSON(response.token));
                document.location.href = '/';
            },
            error: function (response) {
                self.loginError(true);
                console.log('er', response);
            }
        });
    }
}

  // Start the application
ko.applyBindings(new LoginViewModel());