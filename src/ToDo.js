import TodoItems from "./TodoItems";
import React, { Component } from "react";
import styled, { keyframes } from 'styled-components';
import "./TodoList.css";
class ToDo extends Component {

  constructor(props) {
    super(props);
    this.state = {
    items: [],
    fade: false
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

  }

  // to add item----------------------------------------------------------------
  addItem(e) {

    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this._inputElement.value = "";
    }

    console.log(this.state.items);

    e.preventDefault();
  }

    deleteItem(key) {
      var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
    this.setState({ fade:true });
    this.setState({
      items: filteredItems
    });
    }

  // rendering -----------------------------------------------------------------
  render() {
    return (
      <div className="todoListMain">

        <div className="header">
          <form onSubmit={this.addItem}>
           <input ref={(a) => this._inputElement = a}
            placeholder="Enter Task">
            </input>
            <button type="submit">Add Task</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}
                 delete={this.deleteItem}/>
      </div>
    );
  }
}

export default ToDo;
