define(['knockout', "jquery", './user-roles', './storage', "jquery-cookie"], function (ko, $, userRoles, storage) {
    function AuthService() {
        var self = this;
        this.user = ko.observable({role: userRoles.roles.public});
        storage.jwtToken = JSON.parse($.cookie('jwt-token') || null);
        console.log('token', storage.jwtToken);

        function loadCurrentUser() {
            console.log('user load');
            if (!storage.jwtToken) {
                console.log('noToken');
                self.user({role: userRoles.roles.public});
                return;
            }
            $.ajax({
                url: "/api_v0/users/current",
                async: false,
                cache: false,
                headers: {
                    Authorization: 'JWT ' + storage.jwtToken
                },
                dataType: "json",
                success: function (result) {
                    if (!result) {
                        self.user({role: userRoles.roles.public});
                    }
                    else {
                        result.role = result.is_staff ? userRoles.roles.admin : userRoles.roles.user;
                        self.user(result);
                    }
                    console.log('user', self.user());
                },
                error: function (result) {
                    // no user
                    self.user({role: userRoles.roles.public});
                }
            });
        }

        loadCurrentUser.call(this);

        this.logout = function () {
            console.log('logout');
            storage.jwtToken = null;
            $.cookie('jwt-token', ko.toJSON(null));
            loadCurrentUser();
        };
    }

    return new AuthService();
});
