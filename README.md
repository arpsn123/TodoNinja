# Todo List Application
![GitHub Repo Stars](https://img.shields.io/github/stars/arpsn123/TodoNinja?style=social)
![GitHub Forks](https://img.shields.io/github/forks/arpsn123/TodoNinja?style=social)
![GitHub Issues](https://img.shields.io/github/issues/arpsn123/TodoNinja)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/arpsn123/TodoNinja)
![GitHub Last Commit](https://img.shields.io/github/last-commit/arpsn123/TodoNinja)
![GitHub Contributors](https://img.shields.io/github/contributors/arpsn123/TodoNinja)
![GitHub Repo Size](https://img.shields.io/github/repo-size/arpsn123/TodoNinja)
![GitHub Language Count](https://img.shields.io/github/languages/count/arpsn123/TodoNinja)
![GitHub Top Language](https://img.shields.io/github/languages/top/arpsn123/TodoNinja)
![GitHub Watchers](https://img.shields.io/github/watchers/arpsn123/TodoNinja?style=social)
![Maintenance Status](https://img.shields.io/badge/Maintenance-%20Active-green)


This project is a simple yet functional **Todo List Application** built with **Node.js** and **Express**, leveraging **PostgreSQL** as the database and **Sequelize** ORM for managing database interactions. It showcases basic CRUD (Create, Read, Update, Delete) operations for managing a list of todos, with a minimalistic front-end powered by **EJS** templating.

## Features

- **Add New Tasks**: Users can submit new tasks with a title. By default, new tasks are marked as not done (`isDone = false`).
- **View All Tasks**: The homepage lists all tasks retrieved from the database, showing their current status.
- **Mark Tasks as Completed**: Users can mark any task as done, which will strike through the task title in the interface.
- **Delete Tasks**: Users can delete tasks they no longer need from the list.
- **Responsive Templating with EJS**: The application dynamically renders views using the **EJS** templating engine.

## Technologies Used
![Node.js](https://img.shields.io/badge/Node.js-v16%2B-brightgreen)
![Express.js](https://img.shields.io/badge/Express.js-v4.17.1-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-v13.3-blue)
![Sequelize](https://img.shields.io/badge/Sequelize-v6.6.5-blue)
![EJS](https://img.shields.io/badge/EJS-v3.1.6-yellow)
![HTML5](https://img.shields.io/badge/HTML5-5.0-blue)
![CSS3](https://img.shields.io/badge/CSS3-3.0-blue)


- **Node.js**: Backend server for handling HTTP requests and defining routes.
- **Express.js**: Lightweight framework for building the backend API.
- **PostgreSQL**: SQL database for storing todo entries.
- **Sequelize**: ORM for defining and interacting with the `Todos` table.
- **EJS**: Template engine for dynamically rendering HTML pages.
- **HTML/CSS**: For basic front-end structure and styling.


## How It Works

1. The application listens for requests on `http://localhost:3000`.
2. Users interact with the app via a simple form on the homepage to add new todos.
3. Tasks can be marked as complete by clicking a button, which updates their status in the database.
4. A separate button allows users to delete tasks from the list.

## Installation and Setup

Follow these steps to get the project running locally:

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/todo-list-app.git
    ```

2. Install dependencies:

    ```bash
    cd todo-list-app
    npm install
    ```

3. Set up PostgreSQL database:

    - Make sure PostgreSQL is installed and running.
    - Update your `.env` file with the correct database connection details:

      ```
      DB_NAME=your_database
      DB_USER=your_user
      DB_PASSWORD=your_password
      DB_HOST=localhost
      ```

4. Run migrations to create the `Todos` table:

    ```bash
    npx sequelize db:migrate
    ```

5. Start the application:

    ```bash
    npm start
    ```

6. Visit the app in your browser at `http://localhost:3000`.

## Database Schema

The database consists of a single `Todos` table, defined as follows:

| Column      | Type     | Description                       |
|-------------|----------|-----------------------------------|
| `id`        | INTEGER  | Primary key, auto-incrementing     |
| `title`     | STRING   | Title of the todo item             |
| `isdone`    | BOOLEAN  | Status of the todo (default: false)|
| `created_at`| DATE     | Timestamp when the todo was created|
| `updated_at`| DATE     | Timestamp when the todo was updated|

## Future Enhancements

Some features planned for future versions include:

- **User Authentication**: Allow users to sign up, log in, and manage their personal todos.
- **Task Deadlines**: Add the ability to set deadlines for tasks.
- **Priority Levels**: Enable users to set priority levels for their todos (e.g., high, medium, low).
- **Search Functionality**: Provide a way to search through the list of todos.



---

Feel free to contribute to this project by submitting issues or pull requests.
