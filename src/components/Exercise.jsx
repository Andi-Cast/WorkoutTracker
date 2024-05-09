

function Exercise({workoutId, exerciseId, name, sets, repetitions, weight, handleDeleteExercise}) {


    return(
        <div className="exercise-container">
            <div className="exercise-info">{name}</div>
            <div className="exercise-info">{sets}</div>
            <div className="exercise-info">{repetitions}</div>
            <div className="exercise-info">{weight}</div>
            <div>
                <button onClick={() => handleDeleteExercise(exerciseId, workoutId)} className="delete">Delete</button>  
            </div>
        </div>
    );
}

export default Exercise