const Projects = require("./projects-model");

async function validateProjectID(req, res, next) {
    try {
        const project = await Projects.get(req.params.id);
        if (!project) res.status(404).json({ message: "Not found" });
        req.project = project;
        next();
    } catch (e) { next(e) }
}

function validateProject(req, res, next) {
    const { name, description } = req.body;
    if (!name || !description) res.status(400).json({ message: "Name and description required" });
    next();
}

async function postProject(req, res, next) {
    try {
        const postedProject = await Projects.insert(req.body);
        req.postedProject = postedProject;
        next();
    } catch (e) { next(e) }
}

async function updateProject(req, res, next) {
    try {
        const updatedProject = await Projects.update(req.params.id, req.body);
        req.updatedProject = updatedProject;
        next();
    } catch (e) { next(e) }
}

function deleteProject(req, res, next) {
    Projects.remove(req.params.id)
        .then(next)
        .catch(next)
}

module.exports = {
    validateProjectID,
    validateProject,
    postProject,
    updateProject,
    deleteProject,
}