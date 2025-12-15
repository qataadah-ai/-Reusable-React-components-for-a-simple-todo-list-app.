Todo App – React
Project Description

This is a simple Todo List application built using React. It allows users to:

Add new todos

Mark todos as completed

Delete todos

The app demonstrates React component architecture, state management with useState, and props passing between components. It also includes CSS styling for a clean and interactive user interface.

Component Architecture

App.jsx

The main component of the app.

Holds the state for todos and the input value.

Contains the logic to add, toggle, and delete todos.

Passes data and functions as props to child components.

TodoList.jsx

Receives the array of todos and action functions as props.

Loops through todos and renders a TodoItem for each.

Displays a message if the todo list is empty.

TodoItem.jsx

Receives a single todo and action functions as props.

Displays the todo text and a delete button.

Clicking the todo text toggles its completion status.

Clicking the delete button removes the todo.

Uses CSS classes to visually indicate completed todos.
