const express = require("express");

const router = express.Router();

const Projects = require("./projects-model");

router.get("/", (req, res, next) => {
    Projects.get()
        .then(result => res.json(result))
        .catch(next)
});

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    });
});

module.exports = router;
