import React from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";


const Register = () => {
    let navigate = useNavigate();

    let { register, handleSubmit, reset, formState: { errors },
    } = useForm();

        let formSubmit =(data) => {
            console.log(data);

            reset()
        }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Create Account
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Register to get started
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                        </label>
                        <input
                            {...register("name", {
                                required: "name is required",
                            })}
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                    </div>

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
                                minLength:{
                                    value:6,
                                    message: "Minimum 6 character is required",
                                }
                            })}
                            type="password"
                            placeholder="Create a password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                        {errors.password && <p className="text-red-600" >{errors.password.message}</p>}
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer"
                    >
                        Register
                    </button>
                </form>

                {/* Login Link */}
                <div className="mt-6 text-center">
                    <p className="text-gray-600 text-sm">
                        Already have an account?{" "}
                        <button
                        
                            onClick={() => navigate("/")}
                            to="/login"
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            Login
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;