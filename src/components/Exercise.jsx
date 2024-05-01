

function Exercise({name, sets, repetitions, weight}) {


    return(
        <div className="exercise-container">
            <div className="exercise-info">{name}</div>
            <div className="exercise-info">{sets}</div>
            <div className="exercise-info">{repetitions}</div>
            <div className="exercise-info">{weight}</div>
            <button className="delete">Delete</button>  
        </div>
    );
}

export default Exercise