import React from 'react'  

const Greet2 = ({name, heroName,children}) /* props */=> {
  //const {name,heroName} = props   //tambien se pudiera hacer destructuring dentro del function body
  return (
    <div> 
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
      {children}
    </div>
  )
}

export default Greet2    