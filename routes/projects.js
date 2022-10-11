//Bring in express so you can use express router
const express = require("express");
const router = express.Router();
const { data } = require("../data/projectData.json");
const { projects } = data;

router.get("/:id", (req, res) => {
  res.render("project", {
    title: projects[req.params.id].project_name,
    description: projects[req.params.id].description,
  });
});
module.exports = router;
