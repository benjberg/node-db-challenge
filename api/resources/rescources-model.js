const db = require('../../data/dbConfig.js');

module.exports = {
    getResources,
    getByID,
    add
}

function getResources() {
    return db('resources')
}

function getByID(id) {
    return db('resources').where({id}).first()
}

function add(newResource) {
    return db('resources').insert(newResource, 'id')
}