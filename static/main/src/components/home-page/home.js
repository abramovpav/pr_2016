define(['jquery', "knockout", "text!./home.html", 'app/auth-service'], function ($, ko, homeTemplate, authService) {

    function HomeViewModel(route) {
        this.user = authService.user;
    }

    return {viewModel: HomeViewModel, template: homeTemplate};
});
