define(['jquery', "knockout", "text!./new-post.html"], function ($, ko, usersTemplate) {
    function NewPostViewModel(route) {
    }

    return {viewModel: NewPostViewModel, template: usersTemplate};
});
