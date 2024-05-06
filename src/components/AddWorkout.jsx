import { useState } from "react";
import AddExercise from "./AddExercise";

function AddWorkout({handleAddWorkout}) {
    const [workoutTitle, setWorkoutTitle] = useState("");

    function handleChange(event) {
        setWorkoutTitle(event.target.value);
    }

    function handleSaveClick() {
        if(workoutTitle.trim().length > 0) {
            handleAddWorkout(workoutTitle);
            setWorkoutTitle("");
        }
    }

    return(
        <div className="add-workout">
            <input type="text" placeholder="Workout Title" value={workoutTitle} onChange={(event) => handleChange(event)}></input>
            <button onClick={handleSaveClick}>Add Workout</button>
        </div>
    );
}

export default AddWorkout