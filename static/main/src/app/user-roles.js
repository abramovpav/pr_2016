define(['knockout'], function (ko) {
    function UserRoles() {
        this.roles = {
            'public': 0,
            user: 1,
            admin: 2
        };
    }

    return new UserRoles();
});
