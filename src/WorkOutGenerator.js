import { useEffect, useState } from "react";
import WorkoutApi from "./api";

function WorkOutGenerator() {
    const [workouts, setWorkouts] = useState();
    const [exerciseLoad, setTest] = useState({});

    // const handleOnChange = (position) => {
    //     const updatedCheckedState = checkedState.map((item, index) =>
    //       index === position ? !item : item
    //     );

    useEffect(() => {
        async function get() {
            let res = await WorkoutApi.getWorkOutByEquipment();
            console.log(res);
            setWorkouts(res);
        }
        get();
    }, []);

    // const handleFormChange = (e) => {
    //     e.preventDefault();
    //     if(!test.hasOwnProperty(''))
    //     // const { name, value } = e.target;
    //     setForm((fData) => ({ ...fData, [name]: value }));
    // };

    const handleChange = (e) => {
        return "";
    };

    return (
        <>
            <div className="row app-background-secondary">
                <div className="col">
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="abdominals"
                        />
                        <label class="form-check-label" for="abdominals">
                            abdominals
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="abductors"
                        />
                        <label class="form-check-label" for="abductors">
                            abductors
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="adductors"
                        />
                        <label class="form-check-label" for="adductors">
                            adductors
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="biceps"
                        />
                        <label class="form-check-label" for="biceps">
                            biceps
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="calves"
                        />
                        <label class="form-check-label" for="calves">
                            calves
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="chest"
                        />
                        <label class="form-check-label" for="chest">
                            chest
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="forearms"
                        />
                        <label class="form-check-label" for="forearms">
                            forearms
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="glutes"
                        />
                        <label class="form-check-label" for="glutes">
                            glutes
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="hamstrings"
                        />
                        <label class="form-check-label" for="hamstrings">
                            hamstrings
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="lats"
                        />
                        <label class="form-check-label" for="lats">
                            lats
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="lower_back"
                        />
                        <label class="form-check-label" for="lower_back">
                            lower back
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="middle_back"
                        />
                        <label class="form-check-label" for="middle_back">
                            middle back
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="neck"
                        />
                        <label class="form-check-label" for="neck">
                            neck
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="quadriceps"
                        />
                        <label class="form-check-label" for="quadriceps">
                            quadriceps
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="traps"
                        />
                        <label class="form-check-label" for="traps">
                            traps
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="triceps"
                        />
                        <label class="form-check-label" for="triceps">
                            triceps
                        </label>
                    </div>
                </div>
                <div className="col">
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="None"
                        />
                        <label class="form-check-label" for="None">
                            None
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="dumbbell"
                        />
                        <label class="form-check-label" for="dumbbell">
                            dumbbell
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="barbell"
                        />
                        <label class="form-check-label" for="barbell">
                            barbell
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="e-z_curl_bar"
                        />
                        <label class="form-check-label" for="e-z_curl_bar">
                            EZ Curl Bar
                        </label>
                    </div>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="cable"
                        />
                        <label class="form-check-label" for="cable">
                            cable
                        </label>
                    </div>
                </div>
                <div className="col">
                    <button className="btn btn-primary"> search </button>
                </div>
            </div>
            <h1 className="text-start app-background-secondary">
                {" "}
                <button className="btn btn-danger"> x </button> dumbell
                alternating bicep curl{" "}
            </h1>
            <button className="text-start btn btn-primary">
                {" "}
                start workout{" "}
            </button>
            {workouts
                ? workouts.map((e) => {
                      return (
                          <div class="mb-3">
                              <label
                                  for="password"
                                  class="form-label w-100 text-start"
                              >
                                  Password
                              </label>
                              <input
                                  type="password"
                                  class="form-control"
                                  id="password"
                                  name="password"
                                  onChange={handleChange}
                              />
                          </div>
                      );
                  })
                : null}
        </>
    );
}

export default WorkOutGenerator;
