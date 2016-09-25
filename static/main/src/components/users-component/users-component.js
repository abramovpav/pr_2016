define(["jquery", "knockout", "text!./users-component.html", 'app/data-provider'], function ($, ko, templateMarkup, dataProvider) {

    function UsersComponentViewModel() {
        var self = this;
        this.users = ko.observableArray();

        var getUsers = function () {
            dataProvider.get('/api_v0/users/', function(response) {
               self.users(response)
            });
            //$.getJSON('/api_v0/users/', this.users);
        };

        getUsers.call(this);
        //var subscription = params.search.json.subscribe(getUsers, this);
        //this.dispose = function () { subscription.dispose(); };

        this.showUser = function () {
            location.hash = 'user/' + this.id;
        };

        //$(document).foundation();
    }

    return { viewModel: UsersComponentViewModel, template: templateMarkup };

});
