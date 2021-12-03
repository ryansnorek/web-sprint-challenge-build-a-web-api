const Actions = require("./actions-model");

async function validateActionID(req, res, next) {
    try { req.action = await Actions.get(req.params.id) }
    catch (e) { next(e) }
    if (!req.action) res.status(404).json({ message: "Not found" });
    next();
}
function validateAction(req, res, next) {
    const { description, notes } = req.body;
    if (!description || !notes) res.status(400).json({ message: "Description and notes required" });
    next();
} 
async function postAction(req, res, next) {
    try { req.action = await Actions.insert(req.body) }
    catch (e) { next(e) }
    next();
}
async function updateAction(req, res, next) {
    try { req.updatedAction = await Actions.update(req.params.id, req.body) }
    catch (e) { next(e) }
    next();
}

module.exports = {
    validateActionID,
    validateAction,
    postAction,
    updateAction,
}
