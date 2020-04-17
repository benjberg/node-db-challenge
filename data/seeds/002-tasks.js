
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_description: 'make the project good', notes: 'do good work, double check everything', completed: 'false', ProjectId: 6},
        {task_description: 'did you double check your work?', notes: 'get to it!', completed: 'false', ProjectId: 6}
        
      ]);
    });
  };