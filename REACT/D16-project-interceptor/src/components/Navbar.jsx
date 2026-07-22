import React, { useContext } from 'react'
import { Navigate, NavLink } from 'react-router'
import { Auth } from '../context/AuthContext'
import { toast } from 'react-toastify'

const Navbar = () => {

    const {setLoggedInUser} = useContext(Auth)


    return (
        <div className='border-r border-gray-700  p-3 flex flex-col justify-between '>
            <div className='flex flex-col gap-10'>
                <h1 className='text-3xl font-semibold'>E-comm</h1>

                <div className='flex flex-col gap-6 ml-5'>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? "font-semibold text-red-600  border-b border-gray-500 "
                                : "text-black border-b border-gray-500"
                        }
                        to={"/main"}
                        end
                    >
                        Home
                    </NavLink>

                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "font-semibold text-red-600  border-b border-gray-500 "
                            : "text-black border-b border-gray-500"} to={"/main/users"}>Users</NavLink>


                    <NavLink className={({ isActive }) =>
                        isActive
                            ? "font-semibold text-red-600  border-b border-gray-500 "
                            : "text-black border-b border-gray-500"} to={"/main/products"}>Products</NavLink>
                </div>
            </div>


            <button 
             onClick={() => {
                localStorage.removeItem ("loggedinUser");
                toast.warn("user logged out");
                setLoggedInUser(null);
             }}
             className="rounded-lg bg-red-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-red-600 hover:shadow-lg active:scale-95 cursor-pointer">
                Logout
            </button>

        </div>
    )
}

export default Navbar
