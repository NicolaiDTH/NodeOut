// Handle HTTP route GET / and POST / i.e. Home
var Profile = require("./profile.js");
var renderer = require("./renderer.js");

function home(request, response) {

  // if url == "//" && GET
 if (request.url === "/") {
    // Show search field
  response.writeHead(200, {'Content-Type': 'text/plain'});
  renderer.view("header", {}, response);
  renderer.view("search", {}, response);
  renderer.view("footer", {}, response);
  response.end();


  // if url == "/" && post
    // redirect to /:username

 }
}

// Handle HTTP route GET/ :username i.e. /nicolaiowells

function user(request, response) {

  // if url == "/....."
 var username = request.url.replace("/", "");
 if (username.length > 0) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  renderer.view("header", {}, response);

    // get JSON from TTH
  var studentProfile = new Profile(username);

   // on "end"
  studentProfile.on("end", function(profileJSON){
  // show profile


  // store the values which we need
  var values = {
    avatarUrl: profileJSON.gravatar_Url,
    username: profileJSON.profile_name,
    badges: profileJSON.badges.length,
    javascriptPoints: profileJSON.points.JavaScript
    }
    // Simple response
    renderer.view("profile", values, response);
    renderer.view("footer", {}, response);
    response.end();
  });

  // on "error"
  studentProfile.on("error", function(error){
   //show error
  renderer.view("error", {errorMessage: error.message}, response);
  renderer.view("search", {}, response);
  renderer.view("footer", {}, response);
  response.end();
  });
 }
}

module.exports.home = home;
module.exports.user = user;