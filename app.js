const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//app.listen() is the function that starts a port and host, in our case the
//localhost for the connections to listen to incoming requests from a client.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
