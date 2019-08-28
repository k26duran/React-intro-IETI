import React from 'react';
import {TodoList} from './TodoList'

export class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { todoList: [], text: 'Hola :D' , priority: 5, dueDate:new Date()};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>TODO</h3>
          <TodoList todoList={this.state.todoList} />
          <form id="form" onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              What needs to be done?
            </label>
            <input type="text"
              id="new-todo"
              value={this.state.text}
              onChange={this.handleChange}
            />
            <input
              id="new-tod"
              value={this.state.priority}
              onChange={(e)=>this.handlePriority(e)}
            />
            <input type="text"
              id="new-tdo"
              value={this.state.dueDate}
              onChange={(e)=>this.handleDate(e)}
            />
            <button>
              Add #{this.state.todoList.length + 1}
            </button>
          </form>
        </div>
      );
    }
    state = {
        text:'',
        priority:'',
        dueDate: ''
    }
    handlePriority(e){
        this.setState({priority: e.target.value})
    }
    handleDate(e){
        this.setState({dueDate: e.target.value})
    }
    handleChange(e) {
      this.setState({ text: e.target.value });
      
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = [{
        text: this.state.text,
        priority: this.state.priority,
        dueDate: this.state.dueDate,
      }];
      this.setState(prevState => ({
        todoList: prevState.todoList.concat(newItem),
        
      }));
    }
  }