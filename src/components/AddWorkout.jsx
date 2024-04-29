import AddExercise from "./AddExercise";

function AddWorkout() {

    return(
        <div className="add-workout">
            <input type="text" placeholder="Workout Title"></input>
            <button>Add Workout</button>
        </div>
    );
}

export default AddWorkout