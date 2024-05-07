import { useState } from "react";
import { nanoid } from "nanoid";

function AddExercise({workoutId, handleAddExercise}) {
    const [newExercise, setNewExercise] = useState({
        id: nanoid(),
        name:"",
        sets:"",
        repetitions: "",
        weight:""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setNewExercise(prevExercise => ({...prevExercise, [name]: value}))
    }

    function handleAddClick() {
        if(newExercise.sets > 0 && newExercise.repetitions > 0 && newExercise.weight > 0) {
            handleAddExercise(workoutId, newExercise);

            setNewExercise({
                id: nanoid(),
                name: "",
                sets: "",
                repetitions: "",
                weight: ""
            });
        } 
        else {
            alert("Please enter valid numbers greater than 0 for Sets, Repetitions, and Weight.");
        }
    }

    return(
        <div className="add-exercise">
            <input type="text" name="name" placeholder="Exercise" className="add-exercise-input" value={newExercise.name} onChange={handleChange}></input>
            <input type="number" name="sets" placeholder="Sets" className="add-exercise-input" value={newExercise.sets} onChange={handleChange}></input>
            <input type="number" name="repetitions" placeholder="Repitions" className="add-exercise-input" value={newExercise.repetitions} onChange={handleChange}></input>
            <input type="number" name="weight" placeholder="Weight" className="add-exercise-input" value={newExercise.weight} onChange={handleChange}></input>
            <button onClick={handleAddClick}>Add New Exercise</button>
        </div>
    );
}

export default AddExercise