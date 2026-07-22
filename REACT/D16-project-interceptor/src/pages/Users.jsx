
import React, { useEffect, useState } from 'react'
import UserCard from '../components/UserCard';
import { axiosInstance } from '../config/axiosinstance';

const Users = () => {

    const [usersData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let getUserData = async () => {
        try {

            let res = await axiosInstance.get("/users");
            console.log(res);
            setUserData(res.data);
            setIsLoading(false);
            
        } catch (error) {
            console.log("error in user api", error )
        }
    };

   useEffect(() => {
    getUserData();
   }, []);

   if (isLoading) return <h1 className=' text-4xl text-cyan-800 '>Loading Users ..........</h1>

  return (
    <div className='grid grid-cols-3 gap-5'>
     {usersData.map((val) => (
        <UserCard key={val.id} user={val} />
    ))}
    </div>
  )
}

export default Users
