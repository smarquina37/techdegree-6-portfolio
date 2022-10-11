const express = require("express");
// const projectData = require("/data.json");
const app = express();
const port = 3000;

//Set the absolute path in the express.static function
app.use("/static", express.static("public"));

//Set the view engine property to pug
app.set("view engine", "pug");

//Set routes
// const homeRoute = require("/");
// const aboutRoute = require("/about");
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

//app.listen() is the function that starts a port and host, in our case the
//localhost for the connections to listen to incoming requests from a client.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
