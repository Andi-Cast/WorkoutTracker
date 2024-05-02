import Workout from "./Workout";
import AddWorkout from "./AddWorkout";

function WorkoutList({workouts, handleDeleteWorkout}) {

    return(
        <div className="workout-list">
            {workouts.map((workout) => (
                <Workout
                    id={workout.id}
                    title={workout.title}
                    date={workout.date}
                    exercises={workout.exercises}
                    handleDeleteWorkout={handleDeleteWorkout}>
                </Workout>
            ))}
            <AddWorkout></AddWorkout>
        </div>
    );
}

export default WorkoutList