import { useState } from "react"
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
                                          name: 'Bench Press',
                                          sets: 2,
                                          repetitions: 10
                                        }
                                      ]
                                    },
                                    {
                                      id: nanoid(),
                                      title: 'Pull Day',
                                      date: new Date().toLocaleDateString(),
                                      exercises: [
                                        {
                                          name: 'Pull-Ups',
                                          sets: 2,
                                          repetitions: 10
                                        }
                                      ]
                                    }
                                  ])

  return (
    <div className="container">
      <Header></Header>
      <WorkoutList workouts={workouts}></WorkoutList>
    </div>
  )
}

export default App
