define(['jquery', "knockout", "text!./new-post.html"], function ($, ko, usersTemplate) {

  function Post() {
      var self = this;
      this.title = ko.observable('');
      this.text = ko.observable('');
      this.symbols = ko.computed(function() {
          return 1024 - self.text().length;
      }, this)
  }

  function NewPostViewModel(route) {
    var self = this;
    this.post = ko.observable(new Post());

    this.onSave = function () {
      console.log(this.post().title(), this.post().text(), this.post().symbols())
    };

    this.checkForm = ko.computed(function() {
      return self.post().title().length >= 3 && self.post().symbols() >= 0 && self.post().text().length >= 10
    }, this);
    //$(document).foundation();
  }

  return { viewModel: NewPostViewModel, template: usersTemplate };
});
