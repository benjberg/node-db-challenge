const express = require('express');
const resource = require("./rescources-model.js");
const router = express.Router();

router.get('/', (req,res) => {
    resource.getResources()
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch( err => {
            res.status(500).json({ message: 'Cannot get resources'})
    })
})

router.get('/:id', (res, req) => {
    
    resource.getByID(req.params.id)
    .then(resources => {
        if(resources){
            res.json(resources)
        } else {
            res.status(404).json({ message: 'no resources matching that ID'})
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'an error has occurred'})
    })
})

router.post('/', (req,res) =>{
    resource.add(req.body).then(resource =>{
        res.status(200).json(resource)
    }).catch(err => {
        res.status(500).json({message: 'an error has occurred'})
    })
})
module.exports = router;

