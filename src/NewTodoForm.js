import React, { Component } from 'react';
import './NewTodoForm.css';
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            task: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addTask({ ...this.state, id: uuidv4(), completed: false });
        this.setState({ task: '' });
    }
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">Task: </label>
                <input
                    id="task"
                    name="task"
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <button>Add to List</button>
            </form>
        )
    }
}

export default NewTodoForm;