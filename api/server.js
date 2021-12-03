const express = require("express");
const server = express();

const projectsURL = "/api/projects";
const actionsURL = "/api/actions";

const projectsRoutes = require("./projects/projects-router");
const actionsRoutes = require("./actions/actions-router");

server.use(express.json());
server.use(projectsURL, projectsRoutes);
server.use(actionsURL, actionsRoutes);

module.exports = server;
