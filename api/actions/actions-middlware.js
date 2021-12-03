const Actions = require("./actions-model");

async function validateActionID(req, res, next) {
    try { req.action = await Actions.get(req.params.id) }
    catch (e) { next(e) }
    if (!req.action) res.status(404).json({ message: "Not found" });
    next();
}

module.exports = {
    validateActionID,

}
