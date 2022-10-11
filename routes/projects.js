// //Bring in express so you can use express router
const express = require("express");
const router = express.Router();
const { data } = require("../data/projectData.json");
const { projects } = data;

router.get("/:id", (req, res) => {
  res.render("project", {
    projects: data.projects[req.params.id],
  });
});

// if (projects[req.params.id]) {
//   res.render('project', { name: project_name[req.params.id], description: description[req.params.id]})
// } else {
//   const err = new Error();
//   err.status = 404;
//   err.message = `Oops! This site was not found.`
//   next(err)
// }
// })

module.exports = router;
