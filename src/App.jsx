import { useEffect, useState } from "react"
import { nanoid } from "nanoid"
import WorkoutList from "./components/WorkoutList"
import Header from "./components/Header"

function App() {
  
  const [workouts, setWorkouts] = useState(localStorage.getItem('workout-tracker-app-data')
                                  ? JSON.parse(localStorage.getItem('workout-tracker-app-data')) : [
                                    {
                                      id: nanoid(),
                                      title: 'Push Day',
                                      date: new Date().toLocaleDateString(),
                                      exercises: [
                                        {
                                          id: nanoid(),
                                          name: 'Bench Press',
                                          sets: 2,
                                          repetitions: 10,
                                          weight: 345
                                        }
                                      ]
                                    },
                                    {
                                      id: nanoid(),
                                      title: 'Pull Day',
                                      date: new Date().toLocaleDateString(),
                                      exercises: [
                                        {
                                          id: nanoid(),
                                          name: 'Pull-Ups',
                                          sets: 2,
                                          repetitions: 10,
                                          weight: 225
                                        }
                                      ]
                                    }
                                  ])
  
  //workouts is saved if there are changes         
  useEffect(() => {
    localStorage.setItem('workout-tracker-app-data', JSON.stringify(workouts))
  }, [workouts])

  function deleteWorkout(workout_id) {
    const updatedWorkouts = workouts.filter((workout) => workout.id !== workout_id);
    setWorkouts(updatedWorkouts);
  }

  function deleteExercise(exercise_id, workout_id) {
    const updatedWorkouts = workouts.map(workout => {
      if(workout.id === workout_id) {
        const updatedExercises = workout.exercises.filter(exercise => exercise.id !== exercise_id);
        return {...workout, exercises: updatedExercises};
      }
      return workout;
    });
    setWorkouts(updatedWorkouts);
  }
  
  function addWorkout(title) {
    const date = new Date();
    const newWorkout = {
      id: nanoid(),
      title: title,
      date: date.toLocaleDateString(),
      exercises: []
    }

    const newWorkouts = [...workouts, newWorkout]
    setWorkouts(newWorkouts)
  }

  function addExercise(workout_id, newExercise) {

    const updatedWorkouts = workouts.map(workout => {
      if(workout.id === workout_id) {
          return {...workout, exercises: [...workout.exercises, newExercise]};
      }
      return workout;
    });
    setWorkouts(updatedWorkouts);
  }

  return (
    <div className="container">
      <Header></Header>
      <WorkoutList workouts={workouts} 
                   handleDeleteWorkout={deleteWorkout}
                   handleDeleteExercise={deleteExercise}
                   handleAddWorkout={addWorkout}
                   handleAddExercise={addExercise}>
      </WorkoutList>
    </div>
  )
}

export default App
