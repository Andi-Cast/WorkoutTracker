import Workout from "./Workout";
import AddWorkout from "./AddWorkout";

function WorkoutList({workouts, handleDeleteWorkout, handleDeleteExercise, handleAddWorkout, handleAddExercise}) {

    return(
        <div className="workout-list">
            {workouts.map((workout) => (
                <Workout
                    workoutId={workout.id}
                    title={workout.title}
                    date={workout.date}
                    exercises={workout.exercises}
                    handleDeleteWorkout={handleDeleteWorkout}
                    handleDeleteExercise={handleDeleteExercise}
                    handleAddExercise={handleAddExercise}>
                </Workout>
            ))}
            <AddWorkout handleAddWorkout={handleAddWorkout}></AddWorkout>
        </div>
    );
}

export default WorkoutList