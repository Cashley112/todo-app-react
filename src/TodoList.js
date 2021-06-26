import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }
    addTask(newTask) {
        this.setState({
            todos: [...this.state.todos, newTask]
        })
    }
    removeTask(id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        })
    }
    updateTask(id, updatedTask) {
        const updatedTasks = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, task: updatedTask}
            }
            return todo;
        });
        this.setState({ todos: updatedTasks })
    }
    toggleCompletion(id) {
        const updatedTasks = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed};
            }
            return todo;
        });
        this.setState({ todos: updatedTasks });
    }
    render () {
        const todos = this.state.todos.map(todo => {
            return <Todo 
                    task={todo.task}
                    key={todo.id} 
                    id={todo.id}
                    completed={todo.completed}
                    removeTask={this.removeTask}
                    updateTask={this.updateTask}
                    toggleTodo={this.toggleCompletion}
                    />
        })
        return (
            <div className="TodoList">
                <h1>Todo List</h1>
                <NewTodoForm 
                    addTask={this.addTask}
                />
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }

}

export default TodoList;