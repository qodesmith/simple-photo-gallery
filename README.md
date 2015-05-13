# simple-photo-gallery
A simple photo gallery served up with data from a JSON object over a plate of Node.

A few things to note...

#####CORS Error Hell
I originally planned on making AJAX calls to a local JSON file which would serve up the data.
Chrome is just fussy and won't let it happen. My second course of action was to upload the file to my domain
hosting service. More CORS error hell. I finally threw in the white towel and whipped up a Node.js server.
Voila. Problem solved. Node rules.

#####Backbone & Handlebars
I love Backbone. I used a single view with multiple templates to maintain the front end. A single backbone collection
get populated with the photos in the JSON file. Handlebars comes pre-packaged with some decent out-of-the-box helpers.
I put handlebars to work by iterating over the collection of photos and creating the thumbnails accordingly.

#####Design Choice, CSS, & MVP
I think I stayed within the ball-park of the original design. I took a few liberties here and there, but stayed within
boundaries. Then we come to the MVP - a working photo gallery. Please know that we are in the middle of our final project
as we graduate in 3 days. I wanted to show you guys I couldn't get the job done while keeping the look good. Time vs
details were in tension here. Given a bit more time I would like to have added jQuery fades and transitions on each
click.
For the record, I'm self-taught when it comes to html and css. There's only one css file for this project, however, on larger projects I break up the css into individual files for each feature / page / etc. I'm sure there's room for improvements, which I look forward to discussing.

#####Features
All four arrow keys are mapped to the app (<- that rhymes) and function just like a click on the arrow would. The
thumbnails on the bottom are all at half opacity save the selected image. Hovering over non-selected images brings them
to full opacity. The arrows also fade to a solid white when hovering. I like opacities. What can I say ;)

#####JavaScript Code
I hope we get a chance to get under the hood and discuss my logic in person. You'll find comments liberally inserted throughout. The Backbone view contains the functions that fuel the gallery. All in all, this was a pleasant challenge. Given the situation and current allotment of time, I'm proud of this work. Hope you guys like it!
