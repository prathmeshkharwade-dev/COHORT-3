import React from 'react'

const About = ({ users }) => {

    console.log("About rendring.....");

  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

export default React.memo(About, (prevProps, nextProps) => {
    return prevProps.users.id === nextProps.users.id;

});
