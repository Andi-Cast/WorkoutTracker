import Exercise from "./Exercise";
import AddExercise from "./AddExercise";

function Workout({workoutId, title, date, exercises, handleDeleteWorkout, handleDeleteExercise, handleAddExercise}) {


    return(
       <div className="workout">
            <h3 className="workout-title">{title}</h3>
            <span className="workout-date">{date}</span>
            <div className="workout-column-label-contianer">
                <div className="workout-column-label">Exercise</div>
                <div className="workout-column-label">Sets</div>
                <div className="workout-column-label">Repitions</div>
                <div className="workout-column-label">Weight</div>
            </div>
            {exercises.map((exercise) => (
                <Exercise
                    workoutId={workoutId}
                    exerciseId={exercise.id}
                    name={exercise.name}
                    sets={exercise.sets}
                    repetitions={exercise.repetitions}
                    weight={exercise.weight}
                    handleDeleteExercise={handleDeleteExercise}>
                </Exercise>
            ))}
            <AddExercise workoutId={workoutId} handleAddExercise={handleAddExercise}></AddExercise>
            <button onClick={() => handleDeleteWorkout(workoutId)}>Delete Workout</button>
       </div>
    );
}

export default Workout