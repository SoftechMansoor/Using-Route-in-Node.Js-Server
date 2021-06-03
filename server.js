const express = require("express");

const app = express();

app.get("/",function(request, response){
response.send("<h1>Hello, World</h1>");
});
app.get("/contact", function(request, response){
    response.send("Contact me at: mansoor@gmail.com");
});
app.get("/about", function(request, response){
    response.send("My Name is Mansoor Siddique. I m Node.js a Developer");
});

app.get("/Services", function(request, response){
    response.send("<ul><li>Web Developement</li><li>App Developement</li><li>SEO</li></ul>");
});


app.listen(3000, function(){console.log("Server started on port 3000")});
