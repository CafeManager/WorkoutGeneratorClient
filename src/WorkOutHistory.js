import { useState } from "react";
import "./WorkOutHistory.css";
import { useEffect } from "react";
import useWorkoutAPI from "./hooks/useWorkOutAPI";

function WorkOutHistory() {
    const [handleAPILogIn, handleAPILogOut, WorkoutApi] = useWorkoutAPI();

    const [last30Days, setLast30Days] = useState([
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ]);

    const [totalDay, setTotalDays] = useState(0);

    useEffect(() => {
        console.log("useEffect");
        //make an api call to retrieve past 30 days from a user
        async function getDays() {
            let datesExercised = await WorkoutApi.getPastWorkouts("testuser");
            let daysDone = [];
            let calendar = [];
            daysDone = datesExercised.map((e) => {
                const dateObj = new Date(
                    e["date_completed"]
                ).toLocaleDateString("en-US");
                return { date: dateObj, id: e["id"] };
            });

            for (let count = 0; count < 30; count++) {
                let dateCheck = new Date();
                dateCheck.setDate(dateCheck.getDate() - count).toLocaleString();

                //daysDone.includes(dateCheck.toLocaleDateString("en-US"))
                console.log(checkIfInArray(daysDone, dateCheck));
                const location = checkIfInArray(daysDone, dateCheck);
                if (location) {
                    calendar.push({
                        date: dateCheck
                            .toLocaleDateString("en-US")
                            .slice(0, -5),
                        done: true,
                        id: dateCheck[location],
                    });
                } else {
                    calendar.push({
                        date: dateCheck
                            .toLocaleDateString("en-US")
                            .slice(0, -5),
                        done: false,
                    });
                }
            }

            const total = calendar.reduce((acc, curr) => {
                console.log(curr);
                return curr["done"] ? acc + 1 : acc;
            }, 0);

            setTotalDays(total);
            setLast30Days(calendar.reverse());
        }
        getDays();
    }, []);

    function checkIfInArray(arr, date) {
        let val = arr.find(
            (ele) => ele["date"] == date.toLocaleDateString("en-US")
        );
        return val;
    }

    return (
        <>
            <h1>
                You have worked out {totalDay} times out of the past 30 days.
            </h1>
            <div className="history-grid justify-center">
                {last30Days.map((e) => {
                    return e["done"] ? (
                        <span className="history-grid-item-green">
                            <p className="text-end me-1">{e["date"]}</p>
                        </span>
                    ) : (
                        <span className="history-grid-item-grey">
                            <p className="text-end me-1">{e["date"]}</p>
                        </span>
                    );
                })}
            </div>
        </>
    );
}

export default WorkOutHistory;
