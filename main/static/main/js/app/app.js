/**
 * Created by abramau on 9/17/16.
 */

// use HTML5 history
pager.useHTML5history = true;
// use History instead of history
pager.Href5.history = History;
// extend your view-model with pager.js specific data
pager.extendWithPage(viewModel);
// apply the view-model using KnockoutJS as normal
ko.applyBindings(viewModel);
// start pager.js
pager.startHistoryJs();

function AppViewModel() {
    var self = this;
    this.firstName = ko.observable("Bert");

    self.users = ko.observableArray([
        {id: 1, name: 'User1'},
        {id: 2, name: 'User1'},
        {id: 3, name: 'User1'},
        {id: 4, name: 'User1'},
        {id: 5, name: 'User1'}
    ]);

}


ko.applyBindings(new AppViewModel());