

function AddExercise() {

    return(
        <div className="add-exercise">
            <input type="text" placeholder="Exercise" className="add-exercise-input"></input>
            <input type="number" placeholder="Sets" className="add-exercise-input"></input>
            <input type="number" placeholder="Repitions" className="add-exercise-input"></input>
            <input type="number" placeholder="Weight" className="add-exercise-input"></input>
            <button>Add New Exercise</button>
        </div>
    );
}

export default AddExercise