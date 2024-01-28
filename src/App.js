import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Redirect, Link, BrowserRouter } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";
import WorkOutSession from "./WorkOutSession";
import Login from "./Login";
import WorkOutHistory from "./WorkOutHistory";
import WorkOutGenerator from "./WorkOutGenerator";
import useWorkoutAPI from "./hooks/useWorkOutAPI";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import AuthProvider from "./AuthContext";

function App() {
    const [handleAPILogIn, handleAPILogOut, WorkoutApi] = useWorkoutAPI();
    const [username, setUsername] = useState("");
    useEffect(() => {
        console.log("effect");
        setUsername(localStorage.getItem("workOutUsername"));
    }, localStorage.getItem("workOutToken"));
    return (
        <AuthProvider>
            <BrowserRouter>
                <div className="flex-wrapper">
                    <div className="App background-primary app-text-primary">
                        <NavBar handleAPILogOut={handleAPILogOut}> </NavBar>
                    </div>
                    <div className="container text-center">
                        <Routes>
                            <Route path="" element={<Home />} />
                            <Route path="register" element={<Register />} />
                            <Route
                                path="login"
                                element={
                                    <Login
                                        handleAPILogIn={handleAPILogIn}
                                        WorkoutApi={WorkoutApi}
                                    />
                                }
                            />
                            <Route
                                path="workout"
                                element={<WorkOutSession />}
                            />
                            <Route
                                path="workout/:id"
                                element={<WorkOutSession isDone={true} />}
                            />
                            <Route
                                path="history"
                                element={
                                    <WorkOutHistory WorkoutApi={WorkoutApi} />
                                }
                            />
                            <Route
                                path="generator"
                                element={<WorkOutGenerator />}
                            />
                        </Routes>
                    </div>
                    <footer class="row g-0 py-3 app-background-secondary">
                        <div class="col mb-3 text-center">
                            <h5>Contact Information</h5>
                            <ul class="nav flex-column app-background-secondary">
                                <li class="nav-item mb-2">
                                    <a href="#" class="nav-link p-0 text-muted">
                                        Email: cafemanager97@gmail.com
                                    </a>
                                </li>
                                <li class="nav-item mb-2">
                                    <a href="#" class="nav-link p-0 text-muted">
                                        Github: CafeManager
                                    </a>
                                </li>
                                <li class="nav-item mb-2">
                                    <a
                                        href="https://www.linkedin.com/in/kevin-flores-57a699175/"
                                        class="nav-link p-0 text-muted"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li class="nav-item mb-2">
                                    <a href="#" class="nav-link p-0 text-muted">
                                        FAQs
                                    </a>
                                </li>
                                <li class="nav-item mb-2">
                                    <a href="#" class="nav-link p-0 text-muted">
                                        About
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
