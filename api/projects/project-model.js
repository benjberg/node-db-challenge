const db = require('../../data/dbConfig.js');


module.exports = {
    getProjects,
    getById,
    getProjectTask,
    add,
    remove
}

function getProjects() {
    return db('projects')
}

function getById(id) {
    return db('projects').where({ id }).first()
}

function getProjectTask(id) {
    return db('tasks as t')
    .join('projects as p', 'p.id', '=', 't.ProjectId')
    .select('t.task_description', 't.notes', 'p.project_name', 'p.description', 't.completed')
}

function add(project) {
return db('projects').insert(project)
}

function remove(id) {
    return db('projects').where({ id }).del()
}