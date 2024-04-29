import Workout from "./Workout";
import AddWorkout from "./AddWorkout";

function WorkoutList({workouts}) {

    return(
        <div className="workout-list">
            {workouts.map((workout) => (
                <Workout
                    id={workout.id}
                    title={workout.title}
                    date={workout.date}
                    exercises={workout.exercises}>
                </Workout>
            ))}
            <AddWorkout></AddWorkout>
        </div>
    );
}

export default WorkoutList