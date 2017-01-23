// Handle HTTP route GET / and POST / i.e. Home
var Profile = require("./profile.js");

function home(request, response) {

  // if url == "//" && GET
 if (request.url === "/") {
    // Show search field
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write("Header + \n");
  response.write("Search + \n");
  response.end("Footer + \n");

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
  response.write("Header + \n");

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
    response.write(values.username + " has " + values.badges + " badges \n");
    response.end("Footer + \n");
  });

  // on "error"
  studentProfile.on("error", function(error){
   //show error
  response.write(error.message + "\n");
  response.end("Footer + \n");
  });
 }
}

module.exports.home = home;
module.exports.user = user;