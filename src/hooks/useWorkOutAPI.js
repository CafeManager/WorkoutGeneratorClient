import { useState } from "react";
import WorkoutApi from "../api";

function useWorkoutAPI() {
    // const [getLocalItem, setLocalItem, clearItem] = useLocalStorage();

    // const [username, setUsername] = useState(getLocalItem("workoutUsername"));

    // function removeToken() {
    //     localStorage.removeItem("workOutToken");
    //     localStorage.removeItem("workOutUsername");
    //     setUsername("");
    // }

    function handleAPILogIn(username, token) {
        localStorage.setItem("workOutToken", token);
        localStorage.setItem("workOutUsername", username);
    }
    function handleAPILogOut() {
        localStorage.removeItem("workOutToken");
        localStorage.removeItem("workOutUsername");
    }

    return [handleAPILogIn, handleAPILogOut, WorkoutApi];
}

export default useWorkoutAPI;
