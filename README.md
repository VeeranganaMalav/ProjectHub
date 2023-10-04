# ***ProjectHub Guide***

## **Introduction**

Welcome to ProjectHub, which helps you manage your projects, team members, and tasks. This guide will walk you through the key features of the platform, helping you manage your projects effortlessly.

## **Platform Access**

Access the ProjectHub platform through **[https://project-demo.com](https://project-demo.com/)**

## **Feature Walkthrough**

Watch our guided video walkthrough: **[Link to Feature Walkthrough](https://youtube-link-to-walkthrough/)**

## **Key Features**

- Register/Login various users based on their role including Admin, Project Manager, Team Members.
- Create Projects and assign Project Managers and Team Members to them.
- Create Tasks in each Project and also define sub-tasks(if any).
- Manage and build teams and define their team members.


## **Installation & Getting Started**

1. Clone the repository: **`git clone <https://github.com/VeeranganaMalav/ProjectHub.git>`**
2. Install dependencies: **`npm install`**
3. Start the guided tour: **`npm start`**


## **API Endpoints**

### **Authentication**

- **`POST /api/auth/register`** - Register a new user.
- **`POST /api/auth/login`** - Log in an existing user.
- **`GET /api/users`** - Retrieve all users.
- **`GET /api/users/{id}`** - Retrieve an existing user.

### **Project**

- **`GET /api/projects`** - Retrieve all projects.
- **`GET /api/projects/:id`** - Retrieve project details.
- **`POST /api/projects/create`** - Create a new project.
- **`PUT /api/projects/{id}/update`** - Update project details by id.
- **`DELETE /api/projects/{id}/delete`** - Delete project details by id.

### **Task**

- **`GET /api/tasks`** - Retrieve all tasks.
- **`GET /api/tasks/:id`** - Retrieve all tasks details.
- **`POST /api/tasks/create`** - Create a new task.
- **`PUT /api/tasks/{id}/update`** - Update task details by id.
- **`DELETE /api/tasks/{id}/delete`** - Delete task details by id.

### **Team**

- **`GET /api/teams`** - Retrieve all teams.
- **`GET /api/teams/:id`** - Retrieve all teams details.
- **`POST /api/teams/create`** - Create a new team.
- **`PUT /api/teams/{id}/update`** - Update teams details by id.
- **`DELETE /api/teams/{id}/delete`** - Delete team details by id.

## **Technology Stack**

- Front-end: React.js
- Back-end: Node.js, Express.js
- Database: MySQL/MongoDB
