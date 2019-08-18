import React, { Component } from "react";
import styled, { keyframes } from 'styled-components';
import "./TodoList.css";
import { fadeIn } from 'react-animations'
import { fadeOut } from 'react-animations'
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


const FadeIn = styled.div`animation: 1s ${keyframes`${fadeIn}`} `;
const FadeOut = styled.div`animation: 2s ${keyframes`${fadeOut}`} `;


class TodoItems extends Component {

  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  delete(key) {
    return this.props.delete(key)
  }

  createTasks(item) {
    return <FadeIn><li onClick={() => this.delete(item.key)}
              key={item.key}>{item.text}</li></FadeIn>
  }
// to render--------------------------------------------------------------------

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <ReactCSSTransitionGroup transitionName = "example"
               transitionEnterTimeout = {500} transitionLeaveTimeout = {500}>
               <ul className="theList">
                   {listItems}
               </ul>
            </ReactCSSTransitionGroup>

    );
  }
};

export default TodoItems;
