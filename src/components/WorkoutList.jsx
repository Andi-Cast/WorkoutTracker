import Workout from "./Workout";
import AddWorkout from "./AddWorkout";

function WorkoutList({workouts, handleDeleteWorkout, handleDeleteExercise}) {

    return(
        <div className="workout-list">
            {workouts.map((workout) => (
                <Workout
                    workoutId={workout.id}
                    title={workout.title}
                    date={workout.date}
                    exercises={workout.exercises}
                    handleDeleteWorkout={handleDeleteWorkout}
                    handleDeleteExercise={handleDeleteExercise}>
                </Workout>
            ))}
            <AddWorkout></AddWorkout>
        </div>
    );
}

export default WorkoutList