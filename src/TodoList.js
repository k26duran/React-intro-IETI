import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }   

    
    render() {
        const listItems = this.props.todoList.map((item) =>
            <li>
                <Todo text={item.text} priority={item.priority} dueDate={item.dueDate}></Todo>
            </li>
        );
        return (  
            <ul>{listItems}</ul>
        );
    }

}