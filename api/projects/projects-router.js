const express = require("express");
const router = express.Router();
const Projects = require("./projects-model");
const { 
    validateProjectID, validatePostedProject,
    postProject 
} = require("./projects-middleware");

router.get("/", (req, res, next) => {
    Projects.get()
        .then(result => res.json(result))
        .catch(next)
});

router.get("/:id", validateProjectID, (req, res) => res.json(req.project));

router.post("/", validatePostedProject, postProject, (req, res) => res.json(req.postedProject));

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    });
});

module.exports = router;
