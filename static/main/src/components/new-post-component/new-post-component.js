define(['jquery', "knockout", "text!./new-post-component.html", 'app/data-provider'], function ($, ko, newPostTemplate, dataProvider) {

    function Post() {
        var self = this;
        this.title = ko.observable('');
        this.text = ko.observable('');
        this.titleCharsLeft = ko.computed(function () {
            return 128 - self.title().length;
        }, this);
        this.textCharsLeft = ko.computed(function () {
            return 1024 - self.text().length;
        }, this);

        this.serialize = function () {
            return {
                title: self.title,
                text: self.text
            }
        }
    }

    function NewPostComponent() {
        var self = this;
        this.post = ko.observable(new Post());

        this.onSave = function () {
            dataProvider.post('/api_v0/blog/articles',
                ko.toJSON(self.post().serialize()),
                function (response) {
                    console.log('s', response);
                    document.location.href = '/#';
                }, function (response) {
                    console.log('er', response);
                }
            );
        };

        this.checkForm = ko.computed(function () {
            return self.post().title().length >= 3 && self.post().titleCharsLeft() >= 0 && self.post().textCharsLeft() >= 0 && self.post().text().length >= 10
        }, this);

        $(document).foundation();
    }

    return {viewModel: NewPostComponent, template: newPostTemplate};
});
