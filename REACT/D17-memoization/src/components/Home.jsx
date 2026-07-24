import React from 'react'

const Home = ({ users }) => {

      console.log("Home rendring.....");

  return (
    <div>
      <h1>Home this side</h1>
    </div>
  )
}

export default React.memo(Home, (prevProps, nextProps) => {
    return prevProps.users.id === nextProps.users.id;

});
