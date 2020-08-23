import React from 'react';
import withBack from "../withBack";
import route from "../route";

const Item =  () => {
  return <div>Item</div>
}

export default route(withBack('/list')(Item))
