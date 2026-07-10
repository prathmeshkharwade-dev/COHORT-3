import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("user")) || [],
  );
  
  const [updatedData, setUpdatedData] = useState(null);


  const deleteUser = (id) => {
    let filterUsers = users.filter((val, index) => {
      return index !== id;
    });
    console.log(filterUsers);
    setUsers(filterUsers);
    localStorage.setItem("user", JSON.stringify(filterUsers));
  };

  return (
    <div className="p-3 h-screen flex flex-col gap-4">
      <Navbar setToggle={setToggle} />

      {toggle ? (
        <div className="flex flex-wrap gap-4">
          {users.map((elem ) => {
            return ( <Usercard
            setUpdatedData={setUpdatedData}
            deleteUser={deleteUser} 
            key={elem.id}
            user={elem} 
            setToggle={setToggle}
             />
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center h-[70%] items-center">
          <Form updatedData={updatedData} users={users} setUsers={setUsers} setToggle={setToggle} />
        </div>
      )}
    </div>
  );
};

export default App;
