if (Handlebars) {


  /*
  Meteor.PageRouter.onAttachPathHelper = function (helperName, fn) {
    if (Handlebars._default_helpers[helperName]) return;

    Handlebars.registerHelper(helperName, function (context, options) {
      if (arguments.length === 1)
        return fn(this);
      else
        return fn(context);
    });
  };

*/
  Handlebars.registerHelper("getServerState", function (options) {
    return "Idle";
  });

}
