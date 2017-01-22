// Problem: we need a simple way to look at a user's badge count and JAvaScript point from a web browser

// Solution: Use node.js to perform the profile look ups and server our template via HTTP

// 1. Create a web server

// 2. Handle HTTP route GET / and POST / i.e. Home
  // if url == "//" && GET
    // Show search field
  // if url == "/" && post
    // redirect to /:username

// 3. Handle HTTP route GET/ :username i.e. /nicolaiowells
  // if url == "/....."
    // get JSON from TTH
      // on "end"
    // on "error"
      // show error

// 4. Function that handles the reading of files and merge in value
  // read from file and get a string
    // merge values into string