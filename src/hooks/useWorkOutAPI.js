import { useState } from "react";
import WorkoutApi from "../api";
import useLocalStorage from "./useLocalStorage";

function useWorkoutAPI() {
    // const [getLocalItem, setLocalItem, clearItem] = useLocalStorage();

    // const [username, setUsername] = useState(getLocalItem("workoutUsername"));

    // function clearUserInfo() {
    //     clearItem("joblyToken");
    //     clearItem("joblyUsername");
    //     setUsername("");
    // }

    // function addUserToken(username, token) {
    //     setLocalItem("joblyToken", token);
    //     setLocalItem("joblyUsername", username);
    // }

    return [WorkoutApi];
}

export default useWorkoutAPI;
