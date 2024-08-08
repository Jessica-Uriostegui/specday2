import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { addExercise, deleteExercise} from '../slices/exerciseSlice';

const Exercises = () => {
    const exercises = useSelector((state) => state.exercises);
    const dispatch = useDispatch();

    const [type, setType] = useState('');
    const [duration, setDuration] = useState('');
    const [calories, setCalories] = useState('');

    const handleAddExercise = (e) => {
        e.preventDefault();
        if (type && duration && calories) {
            dispatch(addExercise({ type, duration: parseInt(duration, 10), calories: parseInt(calories, 10) }));
            setType('');
            setDuration('');
            setCalories('');
        }
    };

    const handleDeleteExercise = (id) => {
        dispatch(deleteExercise(id));
    };

    return (
        <div className="container">
            <h1>Exercises</h1>
            <form onSubmit={handleAddExercise}>
                <div className="form-group">
                    <label htmlFor="type">Exercise Type</label>
                    <input
                        type="text"
                        className="form-control"
                        id="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="duration">Duration(in minutes)</label>
                    <input
                        type="number"
                        className="form-control"
                        id="duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="calories">Calories Burned</label>
                    <input
                        type="number"
                        className="form-control"
                        id="calories"
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Exercise</button>
            </form>
            <ul className="list-group mt-3">
                {exercises.map((exercise) => (
                    <li key={exercise.id}className="list-group-item">
                        {exercise.type} - {exercise.duration} minutes - {exercise.calories} calories
                        <button className="btn btn-danger btn-sm float-right" onClick={() => handleDeleteExercise(exercise.id)}>Delete</button>

                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Exercises;