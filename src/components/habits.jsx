import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {

  handleIncrease = (habit) => {
    this.props.onIncrease(habit);
  };

  handleDecrease = (habit) => {
    this.props.onDecrease(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  render() {
    return (
      <ul className='habits'>
        {this.props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrease={this.handleIncrease}
            onDecrease={this.handleDecrease}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
