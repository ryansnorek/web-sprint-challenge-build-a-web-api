const Projects = require("./projects-model");

async function validateID(req, res, next) {
    try {
        const project = await Projects.get(req.params.id);
        if (!project) res.status(404).json({ message: "Not found" });
        req.project = project;
        next();
    } catch (e) { next(e) }
}

module.exports = {
    validateID,
}