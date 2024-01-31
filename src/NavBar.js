import { Link } from "react-router-dom";
import useWorkoutAPI from "./hooks/useWorkOutAPI";
import { useAuth } from "./AuthContext";

function NavBar({ handleAPILogOut, WorkOut }) {
    console.log(handleAPILogOut);
    const { setUser, user } = useAuth();

    function handleLogOut() {
        setUser("");
        handleAPILogOut();
    }
    return (
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <Link to="/" className="remove-decoration">
                    <span> Workout Generator </span>{" "}
                </Link>

                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <form class="d-flex ms-auto">
                        {user ? (
                            <>
                                <span> {user} </span>
                                <Link
                                    to="/"
                                    className="ms-1 remove-decoration"
                                    onClick={handleLogOut}
                                >
                                    Logout
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    style={{
                                        textDecoration: "none",
                                        margin: ".2rem",
                                    }}
                                    to="/register"
                                >
                                    Register
                                </Link>
                                <Link
                                    to="/login"
                                    style={{
                                        textDecoration: "none",
                                        margin: ".2rem",
                                    }}
                                >
                                    Login
                                </Link>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
