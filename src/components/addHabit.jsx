import React, { memo } from "react";

const AddHabit =  memo((props) =>{
  const habitInputRef = React.createRef();

  const handleAddHabit = (e) => {
    e.preventDefault();
    const new_habit_name = habitInputRef.current.value;
    props.onAddHabit(new_habit_name);
    habitInputRef.current.value = "";
  };

  console.log("AddHabit render()");
  return (
    <form className="addHabit" onSubmit={handleAddHabit}>
      <input
        type="text"
        ref={habitInputRef}
        className="addHabit__input"
        required
      />
      <button className="addHabit__button">ADD</button>
    </form>
  );
});

export default AddHabit;
