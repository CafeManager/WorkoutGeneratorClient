import "./WorkOutSession.css";
import { useEffect, useState } from "react";
import plus from "./static/add_circle_black_24dp.svg";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import useWorkoutAPI from "./hooks/useWorkOutAPI";

function prepData(exercises) {
    let preppedData = {};
    // console.log(objectPerExercise);
    console.log(exercises);
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

function prepAPIData() {}

function WorkOutSession({ isDone = false }) {
    const location = useLocation();

    const exercises = location.state;
    const { id } = useParams();

    const [form, setForm] = useState([]);
    const [handleAPILogIn, handleAPILogOut, WorkoutApi] = useWorkoutAPI();

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let x = apiDataPrep(form);
        return navigate("/");
    };

    useEffect(() => {
        console.log(id);
        async function processComponent() {
            if (id) {
                let workout = await WorkoutApi.getWorkoutSession(id);
                setForm(workout);
            } else {
                setForm(prepData(exercises));
            }
        }
        processComponent();
    }, []);

    async function apiDataPrep(data) {
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
                        return (
                            <>
                                <span className="work-out-exercise m-1 p-1">
                                    {e["name"]}
                                </span>
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
                    {form.length > 0 ? (
                        <button className="btn btn-primary"> Submit </button>
                    ) : null}
                </div>
            </form>
        );
    };

    const CompletedSession = () => {
        return (
            <div className="work-out-grid">
                <span> </span>
                <span> Reps </span>
                <span> Sets </span>
                <span> kgs/lbs </span>
                {form.map((e) => {
                    return (
                        <>
                            <span className="work-out-exercise m-1 p-1">
                                {e["name"]}
                            </span>
                            <span> {e["reps"]} </span>

                            <span> {e["total_sets"]} </span>
                            <span> {e["total_weight"]} </span>
                        </>
                    );
                })}
            </div>
        );
    };

    return (
        <>
            <h1> Workout </h1>
            {form.length > 0 && id ? (
                <CompletedSession> </CompletedSession>
            ) : (
                <ProgressForm></ProgressForm>
            )}
        </>
    );
}

export default WorkOutSession;
