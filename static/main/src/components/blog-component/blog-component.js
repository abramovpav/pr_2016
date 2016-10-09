define(["jquery", "knockout", "text!./blog-component.html", 'app/auth-service', 'app/data-provider'],
    function ($, ko, templateMarkup, authService, dataProvider) {

        function BlogComponentViewModel() {
            var self = this;
            this.articles = ko.observableArray();

            var getArticles = function () {
                dataProvider.get('/api_v0/blog/articles', function (response) {
                    self.articles(response);
                });
            };


            if (authService.user().role > 0) {
                getArticles.call(this);
            }

            this.showArticle = function () {
                location.hash = 'article/' + this.id;
            };

            $(document).foundation();
        }

        return {viewModel: BlogComponentViewModel, template: templateMarkup};

    });
