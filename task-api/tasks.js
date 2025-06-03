const { v4: uuidv4 } = require('uuid');


//array to store 
let taskList = [];
// getting all the taskss

exports.getAllTasks = (req, res) => {
  res.status(200).json(taskList);
};


// getting a task by id
exports.getTaskById = (req, res) => {
  const task = taskList.find(t => t.id === req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.status(200).json(task);
};




// creating a new task





exports.createTask = (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }
  const newTask = { id: uuidv4(), title, description };
  taskList.push(newTask);
  res.status(201).json(newTask);
};





// updating a task by id




exports.updateTask = (req, res) => {
  const index = taskList.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Task not found' });

  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  taskList[index] = { id: req.params.id, title, description };
  res.status(200).json(taskList[index]);
};








// deleting a task by id
exports.deleteTask = (req, res) => {
  const index = taskList.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Task not found' });
  taskList.splice(index, 1);
  res.status(204).send();
};
