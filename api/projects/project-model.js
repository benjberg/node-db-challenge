const db = require('../../data/dbConfig.js');

module.exports = {
    getProjects,
    getById,
    getProjectTask,
    add
}

function getProjects() {
    return db('projects')
}

function getById(id) {
    return db('projects').where({ id }).first()
}

function getProjectTask(ProjectId) {
    return db('tasks').select('task_description','notes', 'completed', 'ProjectId').where({ProjectId}).orderBy('tasks')
    
}

function add(project) {
return db('projects').insert(project)
}