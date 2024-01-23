import "./WorkOutSession.css";
import { useState } from "react";
import plus from "./static/add_circle_black_24dp.svg";
import { useNavigate, useLocation } from "react-router-dom";
import useWorkoutAPI from "./hooks/useWorkOutAPI";

function prepData(exercises) {
    let preppedData = {};
    // console.log(objectPerExercise);
    let objectPerExercise = exercises.map((e) => {
        return { name: e, sets: "", reps: "", weight: "" };
    });

    // for (let obj of objectPerExercise) {
    //     for (let [key, val] of Object.entries(obj)) {
    //         preppedData[key] = val;
    //     }
    // }
    return objectPerExercise;
}

function WorkOutSession({ isDone = false }) {
    const location = useLocation();

    const exercises = location.state;

    const [form, setForm] = useState(prepData(exercises));
    const [handleAPILogIn, handleAPILogOut, WorkoutApi] = useWorkoutAPI();

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let x = apiDataPrep(form);
        // await WorkoutApi.postWorkOutSession(data);
        return navigate("/");
    };

    async function apiDataPrep(data) {
        // let dataPrep = {};
        // let keys = Object.keys(data);
        // console.log(data);
        await WorkoutApi.postWorkOutSession(data);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        let itemName, itemType;

        if (name.includes("-sets")) {
            itemName = name.split("-sets")[0];
            itemType = "sets";
        }
        if (name.includes("-reps")) {
            itemName = name.split("-reps")[0];
            itemType = "reps";
        }
        if (name.includes("-weight")) {
            itemName = name.split("-weight")[0];
            itemType = "weight";
        }
        let newForm = [];
        for (let obj of form) {
            // if(itemName.includes("-sets")){}
            // if(itemName.includes("-reps")){}
            // if(itemName.includes("-weight")){}
            if (obj["name"] == itemName) {
                obj[itemType] = value;
                newForm.push(obj);
            } else {
                newForm.push(obj);
            }
        }
        setForm(newForm);
    };

    const ProgressForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div className="work-out-grid">
                    <span> </span>
                    <span> Reps </span>
                    <span> Sets </span>
                    <span> kg/lbs </span>

                    {form.map((e) => {
                        console.log(e);
                        return (
                            <>
                                <button className="btn btn-outline-secondary">
                                    {e["name"]}
                                </button>
                                <input
                                    type="text"
                                    className="form-control work-out-item"
                                    placeholder="10"
                                    name={`${e["name"]}-reps`}
                                    onChange={handleChange}
                                    value={e["reps"]}
                                ></input>
                                <input
                                    type="text"
                                    className="form-control work-out-item"
                                    placeholder="10"
                                    name={`${e["name"]}-sets`}
                                    onChange={handleChange}
                                    value={e["sets"]}
                                ></input>
                                <input
                                    type="text"
                                    className="form-control work-out-item"
                                    placeholder="10"
                                    name={`${e["name"]}-weight`}
                                    onChange={handleChange}
                                    value={e["weight"]}
                                ></input>
                            </>
                        );
                    })}
                    <button className="btn btn-primary"> Submit </button>
                </div>
            </form>
        );
    };

    const CompletedSession = () => {
        return (
            <div className="work-out-grid">
                <span> </span>
                <span> Reps </span>
                <span> lbs </span>

                <button className="btn btn-outline-secondary">
                    Overhead Tricep Preaqss
                </button>
                <input
                    type="text"
                    className="form-control work-out-item"
                    placeholder="10"
                ></input>
                <input
                    type="text"
                    className="form-control work-out-item"
                    placeholder="10"
                ></input>
                {exercises.map((e) => {
                    return (
                        <>
                            <button className="btn btn-outline-secondary">
                                {" "}
                                {e}{" "}
                            </button>
                            <input
                                type="text"
                                className="form-control work-out-item"
                                placeholder="10"
                            ></input>
                            <input
                                type="text"
                                className="form-control work-out-item"
                                placeholder="10"
                            ></input>
                        </>
                    );
                })}
            </div>
        );
    };

    return (
        <>
            <h1> Workout </h1>
            {isDone ? (
                <CompletedSession> </CompletedSession>
            ) : (
                <ProgressForm></ProgressForm>
            )}
        </>
    );
}

export default WorkOutSession;
