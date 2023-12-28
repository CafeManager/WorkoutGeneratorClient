import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Redirect, Link, BrowserRouter } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";

function App() {
    return (
        <div className="flex-wrapper">
            <div className="App background-primary app-text-primary">
                <nav class="navbar navbar-expand-lg ">
                    <div class="container-fluid">
                        <a href="#"> Workout Generator </a>
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
                            {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a
                                    class="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Link
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </a>
                                <ul
                                    class="dropdown-menu"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link disabled"
                                    href="#"
                                    tabindex="-1"
                                    aria-disabled="true"
                                >
                                    Disabled
                                </a>
                            </li>
                        </ul> */}
                            <form class="d-flex ms-auto">
                                <a
                                    style={{
                                        textDecoration: "none",
                                        margin: ".2rem",
                                    }}
                                    href="/register"
                                >
                                    Register
                                </a>
                                <a
                                    href="/login"
                                    style={{
                                        textDecoration: "none",
                                        margin: ".2rem",
                                    }}
                                >
                                    Login
                                </a>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>

            <BrowserRouter>
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="register" element={<Register />} />
                </Routes>
            </BrowserRouter>
            <footer class="row g-0 py-3 app-background-secondary">
                <div class="col mb-3 text-center">
                    <h5>Section</h5>
                    <ul class="nav flex-column app-background-secondary">
                        <li class="nav-item mb-2">
                            <a href="#" class="nav-link p-0 text-muted">
                                Home
                            </a>
                        </li>
                        <li class="nav-item mb-2">
                            <a href="#" class="nav-link p-0 text-muted">
                                Features
                            </a>
                        </li>
                        <li class="nav-item mb-2">
                            <a href="#" class="nav-link p-0 text-muted">
                                Pricing
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
    );
}

export default App;
