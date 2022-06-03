import React, { Component } from "react";
import "./app.css";
import AddHabit from './components/addHabit';
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
 
  state = {
    navbar: { totalCount: 0 },
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "coding", count: 0 },
    ],
    lastId: 3
  };

  handleIncrease = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    const totalCount = this._getTotalCount(habits);
    this.setState({ navbar:{totalCount}, habits });
  };

  handleDecrease = (habit)  => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    let cnt = habits[index].count - 1;
    habits[index].count = habits[index].count === 0 ? 0 : cnt;
    const totalCount = this._getTotalCount(habits);
    this.setState({ navbar: {totalCount}, habits});
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    const totalCount = this._getTotalCount(habits);
    this.setState({navbar:{totalCount}, habits});
  };

  resetAll = () => {
    this.setState({
      navbar: { totalCount: 0 },
      habits: [],
      lastId: 0
    });
  };

  handleAddHabit = (new_habit_name) => {
    const habits = [...this.state.habits];
    const newIndex =this.state.lastId+1
    const habit = {
      id : newIndex,
      name : new_habit_name,
      count : 0
    }
    habits.push(habit);
    this.setState({addHabit: {newHabitName:""},habits,lastId: newIndex});
  };
  
  _getTotalCount =(habits) =>{
    const total = habits.reduce((acc, current)=>acc+=current.count,0);
    return total;
  }

  render() {
    const total_cnt = this.state.navbar.totalCount;
    const habits = this.state.habits;
    const addHabit = this.state.addHabit;
    return (
      <>
        <Navbar totalCount={total_cnt}></Navbar>
        <AddHabit addHabit={addHabit} onAddHabit={this.handleAddHabit}></AddHabit>
        <Habits
          habits={habits}
          onIncrease={this.handleIncrease}
          onDecrease={this.handleDecrease}
          onDelete={this.handleDelete}
        ></Habits>
        <button className="reset_button" onClick={this.resetAll}>reset all</button>
      </>
    );
  }
}



export default App;
