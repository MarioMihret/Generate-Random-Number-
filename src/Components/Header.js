
import React from 'react'
const Header = (props) => {

  
  return (
    <div style={{ color: "white" , backgroundColor: 'black' , textAlign: 'center' , padding: '10px'}}>
      {props.name}
    </div>

  )
}

export default Header