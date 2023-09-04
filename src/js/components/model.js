import Todo from './todo.js';
import Project from './project.js';

const todos = [];
const projects = [];

function createTodo(title, dueDate, priority) {
    const newTodo = new Todo(title, dueDate, priority);
    todos.push(newTodo);
}

function createProject(title, description) {
    const newProject = new Project(title, description);
    projects.push(newProject);
}

export { createTodo, createProject, todos, projects };
