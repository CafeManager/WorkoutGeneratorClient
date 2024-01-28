import { useEffect, useState } from "react";
import WorkoutApi from "./api";
import { useNavigate } from "react-router-dom";

function dataPrep() {}

const initialBodySearch = {
    abdominals: false,
    abductors: false,
    adductors: false,
    biceps: false,
    calves: false,
    chest: false,
    forearms: false,
    glutes: false,
    hamstrings: false,
    lats: false,
    "lower back": false,
    "middle back": false,
    neck: false,
    quadriceps: false,
    traps: false,
    triceps: false,
};

const initialEquipmentSearch = {
    None: false,
    dumbbell: false,
    barbell: false,
    "EZ Curl Bar": false,
    cable: false,
};

function WorkOutGenerator() {
    const navigate = useNavigate();
    const [workouts, setWorkouts] = useState();
    const [exerciseLoad, setTest] = useState({});
    const [bodyParts, setBodyParts] = useState(initialBodySearch);
    const [equipmentParts, setEquipmentParts] = useState(
        initialEquipmentSearch
    );
    const [apiWorkOutParts, setApiWorkOutParts] = useState({});

    const handleBodyChange = (e) => {

        let { name, value } = e.target;

        setBodyParts((fData) => {
            return { ...fData, [name]: value };
        });
    };

    const handleEquipmentChange = (e) => {

        let { name, value } = e.target;

        setEquipmentParts((fData) => {
            return { ...fData, [name]: value };
        });
    };

    const handleAPIWorkoutsChange = (e) => {
        let { name, value } = e.target;

        setApiWorkOutParts((fData) => {
            return { ...fData, [name]: value };
        });
    };

    async function handleAPISubmit(e) {
        e.preventDefault();
        let bodyPartsPossibilities = Object.keys(bodyParts).filter(
            (e) => bodyParts[e]
        );
        let equipmentPartsPossibilities = Object.keys(equipmentParts).filter(
            (e) => equipmentParts[e]
        );
        let res = await WorkoutApi.getWorkOutByEquipment();
        let filteredRes = res.filter((ele) => {
            return (
                bodyPartsPossibilities.includes(ele.muscle) ||
                equipmentPartsPossibilities.includes(ele.equipment)
            );
        });
        let statePrep = {};
        console.log(filteredRes);
        for (let obj of filteredRes) {
            // console.log(key);
            statePrep[obj.name] = false;
        }
        setApiWorkOutParts(statePrep);
        console.log(statePrep);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let exercises = Object.keys(apiWorkOutParts).filter(
            (e) => apiWorkOutParts[e]
        );
        console.log(exercises);
        return navigate("/workout", { state: exercises });
    };

    return (
        <>
            <form onSubmit={handleAPISubmit} className="mb-3 p-3">
                <div className="row">
                    <div className="col">
                        {Object.keys(bodyParts).map((e) => {
                            return (
                                <div class="form-check" key={e}>
                                    <label class="form-check-label" for={e}>
                                        {e}
                                    </label>
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        checked={
                                            bodyParts[e] ? "checked" : null
                                        }
                                        onClick={handleBodyChange}
                                        name={e}
                                        value={e}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    <div className="col">
                        {Object.keys(equipmentParts).map((e) => {
                            return (
                                <div class="form-check" key={e}>
                                    <label class="form-check-label" for={e}>
                                        {e}
                                    </label>
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        checked={
                                            equipmentParts[e] ? "checked" : null
                                        }
                                        onClick={handleEquipmentChange}
                                        name={e}
                                        value={e}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className="col">
                        <button className="btn btn-primary"> search </button>
                    </div>
                </div>
            </form>

            <form className="w-50 mx-auto mb-3" onSubmit={handleFormSubmit}>
                {apiWorkOutParts ? (
                    <>
                        {Object.keys(apiWorkOutParts).map((e) => {
                            console.log(e);
                            console.log(apiWorkOutParts[e]);
                            return (
                                <div class="mb-3">
                                    <label
                                        for={e}
                                        class="form-check-label w-75 text-start"
                                    >
                                        {e}
                                    </label>
                                    <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id={e}
                                        name={e}
                                        onChange={handleAPIWorkoutsChange}
                                    />
                                </div>
                            );
                        })}{" "}
                        <button className="text-start btn btn-primary">
                            start workout
                        </button>
                    </>
                ) : null}
            </form>
        </>
    );
}

export default WorkOutGenerator;
