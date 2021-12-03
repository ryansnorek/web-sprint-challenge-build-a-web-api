const express = require("express");
const router = express.Router();
const Projects = require("./projects-model");
const { validateID } = require("./projects-middleware");

router.get("/", (req, res, next) => {
    Projects.get()
        .then(result => res.json(result))
        .catch(next)
});

router.get("/:id", validateID, (req, res) => res.json(req.project));

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    });
});

module.exports = router;
