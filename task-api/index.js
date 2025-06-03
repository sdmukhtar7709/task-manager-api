const express = require('express');

const path = require('path');

const app = express();

const PORT = 3000;

const tasks = require('./tasks');


app.use(express.json());


// acces the public folderrr
app.use(express.static(path.join(__dirname, 'public')));




//  render index.html
   app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.get('/tasks', tasks.getAllTasks);
app.get('/tasks/:id', tasks.getTaskById);
app.post('/tasks', tasks.createTask);
app.put('/tasks/:id', tasks.updateTask);
app.delete('/tasks/:id', tasks.deleteTask);






app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
