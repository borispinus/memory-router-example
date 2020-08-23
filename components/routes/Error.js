import React from 'react';
import withBack from "../withBack";
import route from "../route";

const Error = () => {
  return <div>Error</div>
}

export default route(withBack('/filters')(Error))
