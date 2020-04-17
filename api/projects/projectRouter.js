const express = require('express');
const projects = require('./project-model.js');
const router = express.Router();

router.get('/', (req,res) =>{
    projects.getProjects().then(projects =>{
        res.status(200).json(projects)
    }).catch(err =>{
        res.status(500).json({message: 'an error has occurred'})
    })
    
})

router.get("/:id", (req,res) => {
    projects.getById(req.params.id)
    .then(project => {
        if(project){
            res.status(200).json(project)
        } else {
            res.status(404).json({message: "no projects with that ID found"})
        }
    })
    .catch(() => {
        res.status(500).json({message: "an error has occurred"})
    })
})

router.get('/:id/tasks', (req,res) => {
    ProjectId = req.params.id;
    projects.getProjectTask(ProjectId)
    .then(tasks => {
        if(tasks){
            res.status(200).json(tasks)
        } else {
            res.status(404).json({ message: 'cannot find the tasks of this project'})
        }
    })
    .catch(()=> {
        res.status(500).json({message: 'Failed to get projects tasks'})
    })
})

router.post('/', (req,res)=>{
const newProj = req.body;
projects.add(newProj).then(newProject =>{
    res.status(200).json(newProject)
}).catch(err => {
    res.status(500).json({message: 'an error has occurred'})
})
})





module.exports= router;