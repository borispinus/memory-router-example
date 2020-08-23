import Head from 'next/head'
import {MemoryRouter, Route, Link, Switch} from 'react-router-dom'
import Error from "../components/routes/Error";
import Item from "../components/routes/Item";
import List from "../components/routes/List";
import Filters from "../components/routes/Filters";
import Map from "../components/Map";

export default function Home() {
  return (
    <div>
      <MemoryRouter
        initialEntries={["/filters"]}
        initialIndex={0}
      >
        <div className="index">
          <Switch>
            <Route path='/filters' component={Filters} />
            <Route path='/list' component={List} />
            <Route path='/item' component={Item} />
            <Route path='/error' component={Error} />
          </Switch>
          <Route path='*' component={Map} />
        </div>
      </MemoryRouter>
    </div>
  )
}
