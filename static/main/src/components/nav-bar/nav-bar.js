define(['jquery', 'knockout', 'text!./nav-bar.html', 'app/auth-service'], function ($, ko, template, authService) {

    function NavBarViewModel(params) {

        this.route = params.route;
        this.user = authService.user;

        this.logout = authService.logout;

        $(document).foundation();
    }

    return {viewModel: NavBarViewModel, template: template};
});
