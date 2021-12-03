const Projects = require("./projects-model");

async function validateProjectID(req, res, next) {
    try {
        const project = await Projects.get(req.params.id);
        if (!project) res.status(404).json({ message: "Not found" });
        req.project = project;
        next();
    } catch (e) { next(e) }
}

function validatePostedProject(req, res, next) {
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
    // Projects.insert(req.body)
    //     .then(project => req.postedProject = project)
    //     .catch(next)
    // console.log(req.postedProject)
    // next();
}

module.exports = {
    validateProjectID,
    validatePostedProject,
    postProject,
}