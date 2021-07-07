const express = require('express')

const task = require("./tasks-model.js")

const router = express.Router()

router.get('/', (req, res) => {
    task.getTasks()
    .then( tasks => {
        res.status(200).json(tasks)
    })
    .catch( () => {
        res.status(500).json({message: 'Cannot get projects'})
    })
})

router.post('/', (req,res) => {
    task.add(req.body).then(newTask =>{
        res.status(200).json(newTask)
    }).catch(err => {
        res.status(500).json({message: 'an error has occurred'})
    })
})


module.exports = router;