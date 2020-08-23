import React from 'react';
import withBack from "../withBack";
import route from "../route";
import {Link} from "react-router-dom";

const List = () => {
  return <div>
    <div>
      <Link to="/item">Здание № 1</Link>
    </div>
    <div>
      <Link to="/error">Здание № 2 (с ошибкой)</Link>
    </div>
  </div>
}
export default route(withBack('/filters')(List))
