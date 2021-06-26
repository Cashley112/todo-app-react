import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [{ task: 'Water Plant', id: uuidv4() }, { task: 'Add Nutrients to Plant', id: uuidv4() }]
        }
        this.addTask = this.addTask.bind(this);
    }
    addTask(newTask) {
        this.setState({
            todos: [...this.state.todos, newTask]
        })
    }
    render () {
        const todos = this.state.todos.map(todo => {
            return <Todo 
                    task={todo.task}
                    key={todo.id} 
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