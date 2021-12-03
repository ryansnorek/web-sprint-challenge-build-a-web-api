const express = require("express");
const router = express.Router();
const Actions = require("./actions-model");
const {
    validateActionID, 
    validateAction,
    postAction,
    updateAction, 
    deleteAction
 } = require("./actions-middlware");

router.get("/", (req, res, next) => Actions.get().then(result => res.json(result)).catch(next));

router.get("/:id", validateActionID, (req, res) => res.json(req.action));

router.post("/", validateAction, postAction, (req, res) => res.json(req.action));

router.put("/:id", validateActionID, validateAction, updateAction, (req, res) => res.json(req.updatedAction));

router.delete("/:id", validateActionID, deleteAction, (req, res, next) => next());

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    });
});

module.exports = router;

