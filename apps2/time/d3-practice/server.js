// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");
// =============================================================
var app = express();
var PORT = 3000;

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/data', function(req, res) {
   fs.readFile('./data.json', 'utf8', function (err, data) {
       res.send(data);
      
   });
});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
