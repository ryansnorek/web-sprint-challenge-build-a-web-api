const express = require('express');
const server = express();

const projectsURL = "/api/projects";
const projectsRoutes = require("./projects/projects-router");

server.use(projectsURL, projectsRoutes);
server.use(express.json());



// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js

module.exports = server;
