_          = require('underscore');
Backbone   = require('backbone');
Handlebars = require('handlebars');
$          = require('jquery');
Backbone.$ = $;

// Local files to be concatenated here:
appFile = require('./public/js/app.js');
mvFile  = require('./public/js/views/mainView.js');
pcFile  = require('./public/js/collections/photosCollection.js');
pcFile  = require('./public/js/models/photoModel.js');