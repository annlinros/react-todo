import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/layout/Header";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import About from "./Components/layout/About";
import uuid from "uuid";

class App extends Component {
  state = {
    todos: [
      { title: "bake", id: uuid.v4(), completed: false },
      { title: "cookie", id: uuid.v4(), completed: false },
      { title: "cake", id: uuid.v4(), completed: false },
      { title: "brownie", id: uuid.v4(), completed: false }
    ],
    input: ""
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (id === todo.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };
  addItem = title => {
    const newTodo = {
      title: title,
      id: uuid.v4(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            path="/"
            exact
            render={props => (
              <React.Fragment>
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  deleteTodo={this.deleteTodo}
                />
                <AddTodo addItem={this.addItem} />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
