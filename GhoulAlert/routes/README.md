# GhoulAlert Structure

## Express Routes

These scripts are used to define how requests are handled. They are given a "base"
path from app.js, from which they then determine how an incoming HTTP request should be
responded to. For an example, look at the default index.js:

```
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
```

The Express module is included, and the router extracted to an object.

The router is then called to determine the behavior to be expected if a user makes
a GET request to the base path of the application (http://application-address-here/).
This is defined by a function with three parameters:

* req - An object representing the request.
* res - An object representing the response.
* next - An object representing the next route handler (if this route is treated as a middleware)

The function determines that the behavior of the server when receiving a GET request
to the base path is to send a *response* that *renders* the template located at views/index.pug.

It sends to this template an object with the property `title` that contains the string value `Express`.
With this object, the template can substitute the title variable for that value (think of it like a MadLib, for now).

In short, think of routes as an intermediary in the MVC structure: they handle requests, communicating with Controllers and sending Model data to the Views.
