define(["jquery", "knockout", "text!./blog-component.html", 'app/auth-service', 'app/data-provider'],
    function ($, ko, templateMarkup, authService, dataProvider) {

    function BlogComponentViewModel() {
        var self = this;
        this.articles = ko.observableArray();

        var getArticles = function () {
            dataProvider.get('/api_v0/blog/articles', function(response) {
                self.articles(response);
            });
            //$.getJSON('/api_v0/blog/articles', this.articles);
        };


        if (authService.user().role > 0) {
            getArticles.call(this);
        }
        //var subscription = params.search.json.subscribe(getUsers, this);
        //this.dispose = function () { subscription.dispose(); };

        this.showArticle = function () {
            location.hash = 'article/' + this.id;
        };

        //$(document).foundation();
    }

    return { viewModel: BlogComponentViewModel, template: templateMarkup };

});
