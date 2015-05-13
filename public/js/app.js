$(function() {
	console.log('Application loaded.');

	$('body').on('click', '.thumb', function() {
		App.mainView.renderSlide(this.id);
	});

	$('body').on('click', '#leftArrow span', function() {
		App.mainView.leftArrow();
	});

	$('body').on('click', '#rightArrow span', function() {
		App.mainView.rightArrow();
	});

	// Because of the asynchronous nature of JavaScript,
	// we'll create our collection and view in the .done function.
	$.ajax({
			url: '/gallery',
			method: 'GET'
		})
		.done(function(data) {
			App.data = JSON.parse(data);
			App.photosCollection = new App.Collections.PhotosCollection(App.data.photos);
			App.mainView = new App.Views.MainView();
		});

});

App = {
	Models: {},
	Views: {},
	Collections: {}
}