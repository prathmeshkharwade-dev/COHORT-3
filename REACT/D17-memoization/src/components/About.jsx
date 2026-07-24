import React from 'react'

const About = ({ greet }) => {
    greet();

    console.log("About rendring.....");

  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

export default React.memo(About);
