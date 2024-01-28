import { useState } from "react";
import "./WorkOutHistory.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useWorkoutAPI from "./hooks/useWorkOutAPI";

function WorkOutHistory({ WorkoutApi }) {
    const [last30Days, setLast30Days] = useState([
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

                const location = checkIfInArray(daysDone, dateCheck);

                if (location) {
                    calendar.push({
                        date: dateCheck
                            .toLocaleDateString("en-US")
                            .slice(0, -5),
                        done: true,
                        id: location["id"],
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
                            {console.log(e)}
                            <Link
                                to={`/workout/${e["id"]}`}
                                className="remove-decoration"
                            >
                                <p className="text-end me-1 item-tag">
                                    {e["date"]}
                                </p>
                            </Link>
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
