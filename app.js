const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

//Initializes Middleware
app.use(bodyParser.urlencoded({ extended: false }));

//Set the absolute path in the express.static function
app.use("/static", express.static("public"));

//Set the view engine property to pug
app.set("view engine", "pug");

// Set routes
const mainRoutes = require("./routes");
const aboutRoutes = require("./routes/about");
const projectRoutes = require("./routes/projects");

app.use(mainRoutes);
app.use(aboutRoutes);
app.use("/projects", projectRoutes);

/* Error Handlers */
/* 404 handler to catch undefined or non-existent route requests */
app.use((req, res, next) => {
  const err = new Error("Oops! This site was not found");
  err.status = 404;
  next(err);
});

/* Global error handler */
app.use((err, req, res, next) => {
  if (err) {
    console.log("Global Error called", err);
    if (err.status === 404) {
      res.status(404).render("error", { error: err });
    } else {
      err.message =
        err.message || `Oops looks like something went wrong with the server.`;
      res.status(err.status || 500).render("error", { err });
    }
  }
});

// if (err) {
//   console.log("Global error", err);

//

//app.listen() is the function that starts a port and host, in our case the
//localhost for the connections to listen to incoming requests from a client.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
