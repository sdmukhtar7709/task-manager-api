📝 Task Manager API – Node.js & Express
This is a RESTful API for managing tasks (like a to-do list) built with Node.js and Express.
It supports full CRUD operations, handles tasks in memory (no database), and is tested using Postman.

✅ Features
🔹 Create a new task

🔹 Get all tasks

🔹 Get a task by ID

🔹 Update a task

🔹 Delete a task

🔹 Basic input validation

🔹 Clean error handling

🔹 Fully tested with Postman

🚀 Getting Started
🔧 Prerequisites
Node.js installed (v14 or higher)

npm installed

Postman (for API testing)

📦 Installation
git clone https://github.com/your-username/task-manager-api.git
cd task-manager-api
npm install
node index.js

The server will start at:
👉 http://localhost:3000

📬 API Endpoints
Method	Endpoint	Description
GET	/tasks	Get all tasks
GET	/tasks/:id	Get a specific task by ID
POST	/tasks	Create a new task
PUT	/tasks/:id	Update a task by ID
DELETE	/tasks/:id	Delete a task by ID

📸 Postman API Testing
Example – GET All Tasks



📂 Project Structure

task-manager-api/
├── index.js         # Main server file
├── tasks.js         # API logic/controller
├── views/           # HTML frontend
├── public/          # CSS and static files
├── ss/              # Screenshots
├── README.md



## following is the result on postman


Postman Testing
✅ GET All Tasks

Response(200):
<img 
  src="https://github.com/sdmukhtar7709/task-manager-api/blob/main/ss/Screenshot%202025-06-03%20093942.png" 
  style="border: 3px solid #007acc; border-radius: 8px;" 
/>

✅ POST Create Task

Response(201):
<img 
  src="https://github.com/sdmukhtar7709/task-manager-api/blob/main/ss/post.png" 
  style="border: 3px solid #007acc; border-radius: 8px;" 
/>

✅ GET Task by ID

Response(200):
<img 
  src="https://github.com/sdmukhtar7709/task-manager-api/blob/main/ss/Screenshot%202025-06-03%20094151.png" 
  style="border: 3px solid #007acc; border-radius: 8px;" 
/>

✅ PUT Update Task

Response(200):
<img 
  src="https://github.com/sdmukhtar7709/task-manager-api/blob/main/ss/update.png" 
  style="border: 3px solid #007acc; border-radius: 8px;" 
/>
✅ DELETE Task

Deletes a task by ID.

Response (204):
<img 
  src="https://github.com/sdmukhtar7709/task-manager-api/blob/main/ss/Screenshot%202025-06-03%20094817.png" 
  style="border: 3px solid #007acc; border-radius: 8px;" 
/>






