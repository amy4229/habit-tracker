import React, { Component } from 'react';

class AddHabit extends Component {


    handleAddHabit = (e) => {
        e.preventDefault();
        this.props.onAddHabit();
    }

    handleInputChange =(e) => {
        this.props.onInputChange(e.target.value);
    }

    render() {
        const newHabitName = this.props.addHabit.newHabitName;
        return (
            <form className='addHabit' onSubmit={this.handleAddHabit}>
                <input type="text" value={newHabitName} onChange={this.handleInputChange} className="addHabit__input" required />
                <button className="addHabit__button" >ADD</button>
            </form>
        );
    }
}

export default AddHabit;