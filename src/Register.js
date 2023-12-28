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
                <div class="mb-3">
                    <label
                        for="username"
                        className="form-label w-100 text-start"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        onChange={handleChange}
                        className="form-control"
                        id="username"
                        name="username"
                    />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label w-100 text-start">
                        Password
                    </label>
                    <input
                        type="password"
                        onChange={handleChange}
                        className="form-control"
                        id="password"
                        name="password"
                    />
                </div>
                <div class="mb-3">
                    <label for="firstname" class="form-label w-100 text-start">
                        First Name
                    </label>
                    <input
                        type="text"
                        onChange={handleChange}
                        class="form-control"
                        id="firstname"
                        name="firstName"
                    />
                </div>
                <div class="mb-3">
                    <label for="lastname" class="form-label w-100 text-start">
                        Last Name
                    </label>
                    <input
                        type="text"
                        onChange={handleChange}
                        class="form-control"
                        id="lastname"
                        name="lastName"
                    />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label w-100 text-start">
                        Email
                    </label>
                    <input
                        type="email"
                        onChange={handleChange}
                        class="form-control"
                        id="email"
                        name="email"
                    />
                </div>

                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
}

export default Register;
