import React, { Component } from 'react';
import axios from 'axios';

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        this.setState({
          todos: response.data,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    return (
      <div>
        <h1>New Todos</h1>
        {this.state.todos.length > 0 ? (
          this.state.todos.map((todo) => (
            <ul key={todo.id}>
              <li>User: {todo.userId}</li>
              <li>Id: {todo.id}</li>
              <li>Title: {todo.title}</li>
              <li>Completed: {todo.completed ? 'Yes' : 'No'}</li>
            </ul>
          ))
        ) : (
          <p>Loading todos...</p>
        )}
      </div>
    );
  }
}
