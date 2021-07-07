const db = require('../../data/dbConfig.js');

module.exports = {
    getTasks,
    add
}

function getTasks() {
    return db('tasks')
}

function add(newTask) {
    return db('tasks').insert(newTask, 'id')
}