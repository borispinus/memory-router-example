import React from 'react';

const route = (Component) => (props) => {
  return (
    <div className="route">
      <Component {...props}/>
    </div>
  )
}

export  default route
