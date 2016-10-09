define(['jquery', "knockout", "text!./users.html"], function ($, ko, usersTemplate) {

    function UsersViewModel(route) {
        $(document).foundation();
    }

    return {viewModel: UsersViewModel, template: usersTemplate};
});
