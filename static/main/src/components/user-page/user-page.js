define(["jquery", 'knockout', 'text!./user-page.html', 'app/data-provider'], function ($, ko, templateMarkup, dataProvider) {

    function UserPage(route) {
        var self = this;
        this.user = ko.observable('');

        dataProvider.get('/api_v0/users/' + route.id, function (response) {
            console.log('user', response);
            self.user(response);
        });
        //$.getJSON('/api_v0/users/'+ route.id, function (result) {
        //    console.log(result);
        //    self.user(result);
        //}, this);

    }

    // This runs when the component is torn down. Put here any logic necessary to clean up,
    // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
    UserPage.prototype.dispose = function() { };
  
    return { viewModel: UserPage, template: templateMarkup };

});
