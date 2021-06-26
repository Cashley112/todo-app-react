import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
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
    render () {
        const todos = this.state.todos.map(todo => {
            return <Todo 
                    task={todo.task}
                    key={todo.id} 
                    id={todo.id}
                    removeTask={this.removeTask}
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