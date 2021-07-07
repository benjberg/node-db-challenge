
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
  .then(function () {
    
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'do the project', description: 'make sure the project is done', completed: 'False'},
        
      ]);
    });
  };
