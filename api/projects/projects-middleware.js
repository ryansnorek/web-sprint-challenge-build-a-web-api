const Projects = require("./projects-model");

async function validateProjectID(req, res, next) {
    try { req.project = await Projects.get(req.params.id) }
    catch (e) { next(e) }
    if (!req.project) res.status(404).json({ message: "Not found" });
    next();
    // try {
    //     const project = await Projects.get(req.params.id);
    //     if (!project) res.status(404).json({ message: "Not found" });
    //     req.project = project;
    //     next();
    // } catch (e) { next(e) }
}

function validateProject(req, res, next) {
    const { name, description } = req.body;
    if (!name || !description) res.status(400).json({ message: "Name and description required" });
    next();
}

async function postProject(req, res, next) {
    try { req.postedProject = await Projects.insert(req.body) } 
    catch (e) { next(e) }
    next();
}

async function updateProject(req, res, next) {
    try { req.updatedProject = await Projects.update(req.params.id, req.body) } 
    catch (e) { next(e) }
    next();
}

function deleteProject(req, res, next) {
    Projects.remove(req.params.id)
        .then(next)
        .catch(next)
}

async function validateProjectActions(req, res, next) {
    try { req.projectActions = await Projects.getProjectActions(req.params.id) }
    catch (e) { next(e) }
    next();
}

module.exports = {
    validateProjectID,
    validateProject,
    postProject,
    updateProject,
    deleteProject,
    validateProjectActions
}