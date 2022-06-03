import React, { Component } from 'react';

class AddHabit extends Component {

    habitInputRef = React.createRef();

    handleAddHabit = (e) => {
        e.preventDefault();
        const new_habit_name = this.habitInputRef.current.value;
        this.props.onAddHabit(new_habit_name);
        this.habitInputRef.current.value ="";
    }

    render() {
        return (
            <form className='addHabit' onSubmit={this.handleAddHabit}>
                <input type="text" ref={this.habitInputRef}  className="addHabit__input" required />
                <button className="addHabit__button" >ADD</button>
            </form>
        );
    }
}

export default AddHabit;