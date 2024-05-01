import Exercise from "./Exercise";
import AddExercise from "./AddExercise";

function Workout({id, title, date, exercises}) {


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
            {exercises.map((exercise, index) => (
                <Exercise
                    key={index}
                    name={exercise.name}
                    sets={exercise.sets}
                    repetitions={exercise.repetitions}
                    weight={exercise.weight}>
                </Exercise>
            ))}
            <AddExercise></AddExercise>
            <button>Delete Workout</button>
       </div>
    );
}

export default Workout