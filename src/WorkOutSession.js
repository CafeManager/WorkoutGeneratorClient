import "./WorkOutSession.css";
import plus from "./static/add_circle_black_24dp.svg";
function WorkOutSession() {
    return (
        <>
            <h1> Workout </h1>
            <div className="work-out-grid">
                <span> </span>
                <span> Reps </span>
                <span> lbs </span>
                <span> </span>
                <button className="btn btn-outline-secondary">
                    {" "}
                    Overhead Tricep Press{" "}
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
                <div className="text-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                    >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z" />
                    </svg>
                </div>
                <button className="btn btn-outline-secondary">
                    {" "}
                    Overhead Tricep Press{" "}
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
                <div className="text-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                    >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z" />
                    </svg>
                </div>
                <button className="btn btn-outline-secondary">
                    {" "}
                    Overhead Tricep Press{" "}
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
                <div className="text-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                    >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z" />
                    </svg>
                </div>

                <div className="text-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                    >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                    </svg>
                </div>
            </div>
        </>
    );
}

export default WorkOutSession;
