import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useWorkoutAPI from "./hooks/useWorkOutAPI";
import { useAuth } from "./AuthContext";

const INITIAL_DATA = {
    username: "",
    password: "",
};

function Login({ handleAPILogIn, WorkoutApi }) {
    const [form, setForm] = useState(INITIAL_DATA);
    const navigate = useNavigate();

    const { setUser, user } = useAuth();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((fData) => ({ ...fData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let token = await WorkoutApi.loginUser(form);
        console.log(token);
        console.log(form);
        await handleAPILogIn(form["username"], token);
        setUser(form["username"]);
        return navigate("/");
    };
    return (
        <>
            <form
                className="w-50"
                onSubmit={handleSubmit}
                style={{ marginLeft: "25%" }}
            >
                <div class="form-group mb-3" style={{ textAlign: "start" }}>
                    <label className=" form-label" for="username">
                        Username
                    </label>
                    <input
                        type="username"
                        class="form-control"
                        name="username"
                        placeholder="Enter username"
                        onChange={handleChange}
                        value={form["username"]}
                    />
                </div>
                <div class="form-group mb-3" style={{ textAlign: "start" }}>
                    <label className=" form-label" for="password">
                        Password
                    </label>
                    <input
                        type="password"
                        class="form-control"
                        name="password"
                        placeholder="Enter password"
                        onChange={handleChange}
                        value={form["password"]}
                    />
                </div>

                <button type="submit" className="btn app-background-accent">
                    Submit
                </button>
            </form>
        </>
    );
}

export default Login;
