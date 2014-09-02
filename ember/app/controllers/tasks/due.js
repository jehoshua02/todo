import TasksController from 'todo/controllers/tasks';

export default TasksController.extend({
  sortProperties: ['due']
});
