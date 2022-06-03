import React, { Component } from "react";

class Habit extends Component {

  render() {
    
    const {name , count} = this.props.habit;
    const {onIncrease, onDecrease , onDelete}= this.props;
    return (
      <li className='habit'>
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={()=>onIncrease(this.props.habit)}>
          <i className="fa-solid fa-square-plus "></i>
        </button>
        <button className="habit-button habit-decrease" onClick={()=>onDecrease(this.props.habit)}>
          <i className="fa-solid fa-square-minus "></i>
        </button>
        <button className="habit-button habit-delete" onClick={()=>onDelete(this.props.habit)}>
          <i className="fa-solid fa-trash "></i>
        </button>
      </li>
    );
  }
}

export default Habit;
