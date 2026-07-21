import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {

    const { registeredUsers,  setLoggedInUser } = useContext(Auth);

    let navigate = useNavigate();

    let { register, handleSubmit, reset, formState: { errors },
    } = useForm();

    let formSubmit = (data) => {
        let user = registeredUsers.find((val) => {
            return val.email === data.email && val.password === data.password;
        });

        if (!user ) {
            toast.error("invalid creds or user not found");
            reset();
            return;
        }

        setLoggedInUser(user);
        localStorage.setItem('loggedinUser', JSON.stringify(user));
        toast.success("user loggdIn");
        navigate("/main");

        reset();
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
                    <p className="text-gray-500 mt-2">
                        Sign in to continue to your account
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                        </label>
                        <input
                            {...register("email", {
                                required: "email is required",
                            })}
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            {...register("password", {
                                required: "password is required",
                                minLength: {
                                    value: 6,
                                    message: "Minimum 6 character is required",
                                }
                            })}
                            type="password"
                            placeholder="Create a password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                        {errors.password && <p className="text-red-600" >{errors.password.message}</p>}
                    </div>

                    {/* Forgot Password */}
                    <div className="flex justify-end">
                        <a
                            href="#"
                            className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer"
                    >
                        Login
                    </button>
                </form>

                {/* Register */}
                <div className="mt-6 text-center">
                    <p className="text-gray-600 text-sm">
                        Don't have an account?{" "}
                        <button
                            onClick={() => navigate("/register")}
                            type="button"
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            Register
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;