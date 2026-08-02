import {  useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export const useAuth = () => {
    let navigate = useNavigate();

        let {
            register,
            handleSubmit,
            reset,
            formState: {errors},           
        } = useForm();

        const registerForm = (data) => {
            console.log("register", data);
        };

        const loginForm =(data) => {
            console.log("login", data);
        };

        return {
            navigate,
            register,
            handleSubmit,
            errors,
            registerForm,
            loginForm,
        };
};
