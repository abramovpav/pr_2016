define(['jquery', 'knockout', './router', 'knockout-projections'], function ($, ko, router) {

    // Components can be packaged as AMD modules, such as the following:
    ko.components.register('nav-bar', {require: 'components/nav-bar/nav-bar'});
    ko.components.register('home-page', {require: 'components/home-page/home'});
    ko.components.register('users-page', {require: 'components/users-page/users'});


    ko.components.register('about-page', {require: 'components/about-page/about'});
    ko.components.register('users-component', {require: 'components/users-component/users-component'});
    ko.components.register('blog-component', {require: 'components/blog-component/blog-component'});
    ko.components.register('user-page', {require: 'components/user-page/user-page'});
    ko.components.register('new-post-component', {require: 'components/new-post-component/new-post-component'});
    ko.components.register('new-post-page', {require: 'components/new-post-page/new-post'});


    // [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]

    // Start the application
    ko.applyBindings({route: router.currentRoute});
});
