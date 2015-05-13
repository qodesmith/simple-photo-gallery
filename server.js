var express		 = require('express'),
		request 	 = require('request'),
		bodyParser = require('body-parser'),
		morgan 		 = require('morgan'), // Shows details in the console.
		app				 = express();

app.use(morgan('dev')); // HTTP request logger middleware.
app.use(bodyParser.urlencoded({ extended: false })); // https://goo.gl/0UviQN
app.use(bodyParser.json()); // https://goo.gl/0UviQN

app.use(express.static('./public')); // Serve the static assets of this application.


// I uploaded the gallery_json.js file to my own
// domain to avoid Chrome's annoying CORS errors.
// Chrome block ajax calls to local files.

////////////////////////////////////////////////////////////////////////////
//	 THE AJAX CALL TO A LOCAL FILE WOULD HAVE BEEN SOMETHING LIKE THIS: 	//
// ---------------------------------------------------------------------- //
// 																																				//
// $.get('../someDirectory/gallery_json.js')															//
// 	.done(function(gallery) {																							//
// 		// "gallery" now represents the full JSON object.										//
// 		// Any logic can be entered below, such as...												//
// 		var photos = gallery.photos // Stores all the photos in a variable. //
// 	})																																		//
// 	.fail(function() {																										//
// 		// Enter logic in case of an error.																	//
// 	});																																		//
////////////////////////////////////////////////////////////////////////////

app.get('/gallery', function(req, res) {
	request('http://qodesmith.com/gallery_json.js', function(err, response, body) {
		res.send(body);
	});
});

app.listen(9001, function() {
	console.log('Listening on port 9001...');
});