define(['jquery', "knockout", "text!./about.html"], function ($, ko, aboutTemplate) {

  function AboutViewModel(route) {
      $(document).foundation();
  }

  return { viewModel: AboutViewModel, template: aboutTemplate };
});
