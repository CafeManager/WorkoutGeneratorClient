import placeholderImage from "./static/frame_placeholder.jpg";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <h1 className="text-center app-title">
                Welcome to Workout Generator
            </h1>
            <div id="carouselExample" class="carousel slide w-25 mx-auto">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img
                            src={placeholderImage}
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src={placeholderImage}
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src={placeholderImage}
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <h1 className="text-center app-title">
                Jump right into it with a preset workout
            </h1>

            <div className="row">
                <div className="col text-center">
                    <Link to="history">
                        <button className="btn app-background-accent">
                            My History
                        </button>
                    </Link>
                </div>
                <div className="col text-center">
                    <Link to="Workout">
                        <button className="btn app-background-accent">
                            My Exercises
                        </button>
                    </Link>
                </div>
                <div className="col text-center">
                    <Link to="generator">
                        <button className="btn app-background-accent">
                            Workout Generator
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;
