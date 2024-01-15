import { useState } from "react";
import { useNavigate } from "react-router-dom";

const INITIAL_DATA = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
};

function Register() {
    const [form, setForm] = useState(INITIAL_DATA);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((fData) => ({ ...fData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        return navigate("/");
    };
    return (
        <>
            {" "}
            <form
                className="w-50"
                onSubmit={handleSubmit}
                style={{ marginLeft: "25%" }}
            >
                <div className="form-group mb-3" style={{ textAlign: "start" }}>
                    <label for="email" className=" form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Enter email"
                    />
                </div>
                <div class="form-group mb-3" style={{ textAlign: "start" }}>
                    <label className=" form-label" for="username">
                        Username
                    </label>
                    <input
                        type="username"
                        class="form-control"
                        id="username"
                        placeholder="Enter username"
                    />
                </div>
                <div class="form-group mb-3" style={{ textAlign: "start" }}>
                    <label className=" form-label" for="password">
                        Password
                    </label>
                    <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="Enter password"
                    />
                </div>
                <div class="form-group mb-3" style={{ textAlign: "start" }}>
                    <label className=" form-label" for="first-name">
                        First Name
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="first-name"
                        placeholder="Enter first name"
                    />
                </div>
                <div class="form-group mb-3" style={{ textAlign: "start" }}>
                    <label className=" form-label" for="last-name">
                        Last Name
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="last-name"
                        placeholder="Enter last name"
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
}

export default Register;
