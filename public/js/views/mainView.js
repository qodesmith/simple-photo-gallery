App.Views.MainView = Backbone.View.extend({
  initialize: function() {
    console.log('VIEW: main view created.');
    this.title = Handlebars.compile($('#title-template').html());
    this.image = Handlebars.compile($('#image-template').html());
    this.description = Handlebars.compile($('#description-template').html());
    this.thumbs = Handlebars.compile($('#thumbs-template').html());

    this.keypresses();
    this.startUp();
  },
  startUp: function() {
  	$('#mainTitle').html(this.title(App.data));

  	// Serve up the 1st photo...
  	this.renderSlide(0);

  	// ...and render the thumbs.
  	$('#thumbs').append(this.thumbs(App.data));

  	// Keeps track of what slide we're on for the arrow logic.
  	App.slide = 0;

  	// Put a red border around our current slide's thumb.
  	$('#'+App.slide).toggleClass('selected');
  	$('#'+App.slide).width('150px');
  },
  renderSlide: function(number) {
  	$('#'+App.slide).toggleClass('selected'); // Turn off the current thumbs border.
  	$('#'+App.slide).width('auto');
  	App.slide = parseInt(number);
  	$('#'+App.slide).toggleClass('selected'); // Turn on the new thumbs border.
  	$('#'+App.slide).width('150px');
  	

  	var photo = App.data.photos[number];
  	$('#mainImage').html(this.image(photo));
  	$('#description').html(this.description(photo));

  	$('body').attr('background', photo.url);
  },
  leftArrow: function() {
  	if(App.slide > 0 && App.slide < App.data.photos.length) {
  		this.renderSlide(App.slide - 1);
  	} else if(App.slide === 0) {
  		this.renderSlide(App.data.photos.length - 1);
  	}
  },
  rightArrow: function() {
  	if(App.slide < App.data.photos.length - 1) {
  		this.renderSlide(App.slide + 1);
  	} else if(App.slide === App.data.photos.length - 1) {
  		this.renderSlide(0);
  	}
  },
  keypresses: function() {
  	// Map our arrow keys to change slides.
  	var view = this;
  	$(document).keydown(function(e) {
  		if(e.which === 37 || e.which === 40) {
  			view.leftArrow();
  		} else if(e.which === 39 || e.which === 38) {
  			view.rightArrow();
  		}
  	});
  }
});