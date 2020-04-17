const express= require('express');
const projectRouter = require('./api/projects/projectRouter.js');
const resourcesRouter = require('./api/resources/resourcesRouter.js');
const server = express();

server.use(express.json());

server.get('/', (req,res) =>{
    res.send('server running')
})

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourcesRouter);
module.exports = server;
