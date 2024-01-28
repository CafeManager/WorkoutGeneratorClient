import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class WorkoutApi {
    // the token for interactive with the API will be stored here.
    static token;

    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);

        //there are multiple ways to pass an authorization token, this is how you pass it in the header.
        //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${WorkoutApi.token}` };
        const params = method === "get" ? data : {};
        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    // Individual API routes

    /** Get past 30 workouts */
    static async getPastWorkouts() {
        let res = await this.request(
            `workouts/last30/${localStorage.getItem("workOutUsername")}`
        );

        return res.data;
    }

    static async getWorkoutSession(id) {
        let res = await this.request(`workouts/${id}`);
        console.log(res);
        return res.data;
    }

    static async getWorkOutByEquipment() {
        let url = `${exerciseBaseUrl}/`;
        try {
            return (
                await axios(url, {
                    headers: {
                        "X-Api-Key": "mJmSps8E6OH16sRxQrY5FA==gvKds0VkQ7LSc0pW",
                    },
                })
            ).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async registerAccount(body) {
        let res = await this.request(`auth/register`, body, "POST");
        return res.token;
    }

    static async editAccount(body, username) {
        let res = await this.request(`users/${username}`, body, "PATCH");
        return res.token;
    }

    static async loginUser(body) {
        console.log(body);
        let res = await this.request(`auth/token`, body, "POST");
        return res.token;
    }

    static async postWorkOutSession(body) {
        let dataPrep = {
            exercises: body,
            username: localStorage.getItem("workOutUsername"),
            time: new Date().toDateString(),
        };
        let res = await this.request(`workouts/add-session`, dataPrep, "POST");
        return { response: "OK" };
    }
}

WorkoutApi.token = localStorage.getItem("workOutToken");

// for now, put token ("testuser" / "password" on class)
// WorkoutApi.token =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

let exerciseBaseUrl = "https://api.api-ninjas.com/v1/exercises";

export default WorkoutApi;
