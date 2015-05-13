App.Collections.PhotosCollection = Backbone.Collection.extend({
  initialize: function() {
    console.log('COLLECTION: photos collection created.');
  },
  getPhotos: function() {
  	// var data = $.get('/gallery')
  	// 						.done(function(gallery) {
  	// 							var data = JSON.parse(gallery);
  	// 							debugger;
  	// 						})

		$.ajax({
			url: '/gallery',
			method: 'GET'
		})
		.done(function(data) {
			// console.log(data);
			console.log(JSON.parse(data));
			App.data = JSON.parse(data);
		});

  }
});