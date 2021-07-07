
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl =>{
      tbl.increments('id');
      tbl.string('project_name').notNullable().index();
      tbl.string('description', 250);
      tbl.boolean('completed').notNullable().defaultTo(false);
  })
  .createTable('resources', tbl =>{
      tbl.increments('id');
      tbl.string('resource_name', 250).notNullable().index();
      tbl.string('resource_description', 255);
  })
  .createTable('tasks', tbl => {
      tbl.increments('id');
      tbl.string('task_description').notNullable();
      tbl.string('notes');
      tbl.boolean('completed').defaultTo(false);
      tbl.integer('ProjectId').unsigned()
      .notNullable().references('id').inTable('projects')
      .onDelete('RESTRICT').onUpdate('CASCADE')
  })
  .createTable('project_resources', tbl => {
      tbl.increments();
      tbl.integer('projectId').unsigned()
      .notNullable().references('id').inTable('projects').onDelete('RESTRICT').onUpdate('CASCADE');
      tbl.integer('resourceId').unsigned().notNullable().references('id').inTable('resources')
      .onDelete('RESTRICT').onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.scheme.dropTableIfExists('project_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
