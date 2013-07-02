Package.describe({
  summary: "Simple module test"
});

Package.on_use(function (api, where) {
  api.use([
    'deps',
    'session',
    'underscore',
  ], 'client');
  api.add_files(['test-pack.js', 'lib/helpers.js'], 'client');
});

