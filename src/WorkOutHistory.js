import { useState } from "react";
import "./WorkOutHistory.css";
import { useEffect } from "react";

function WorkOutHistory() {
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
            const total = last30Days.reduce((acc, curr) => {
                return curr ? acc + 1 : acc;
            }, 0);
            console.log(total);
            setTotalDays(total);
        }
        getDays();
    }, []);
    
    return (
        <>
            <h1>
                You have worked out {totalDay} times out of the past 30 days.
            </h1>
            <div className="history-grid justify-center">
                {last30Days.map((e) => {
                    return e ? (
                        <span className="history-grid-item-grey">
                            <p className="text-end me-1">1/3a1</p>
                        </span>
                    ) : (
                        <span className="history-grid-item-green">
                            <p className="text-end me-1">1/3a1</p>
                        </span>
                    );
                })}
            </div>
        </>
    );
}

export default WorkOutHistory;
