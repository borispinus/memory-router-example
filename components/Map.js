import React from 'react'

const Map = (props) => {
  const handlePointClick = () => {
    if (props.history) {
      props.history.push('/item')
    }
  }
  return <div className="map">
    <div className="point" onClick={handlePointClick}/>
  </div>
}

export default Map;
