import React from 'react';
import {Link} from "react-router-dom";
import route from "../route";

const Filters = () => {
  return <div>
    Filters
    <div>
      <Link to="/list"><a>Поиск</a></Link>
    </div>
  </div>
}

export default route(Filters)
