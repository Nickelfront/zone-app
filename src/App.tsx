import './App.css';
import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import Dashboard from './components/Dashboard/Dashboard';
import Meals from './components/Meals/Meals';
import History from './components/History/History';
import Settings from './components/Settings/Settings';
import { Route, Switch } from 'react-router';
import { WebRoute } from './utils/types'
import Error from './components/Error/Error';

class App extends Component {
  render() {
    const links: WebRoute[] = [
      { url: "/", label: "Home", component: Dashboard }, 
      { url: "/meals", label: "Meals", component: Meals },
      { url: "/history", label: "History", component: History }, 
      { url: "/settings", label: "Settings", component: Settings }, 
    ];

    const routes = [];

    for (const [index, item] of links.entries()) {
      routes.push(<Route key={index} exact path={item.url} component={item.component} />);
    }

    return <main>
      <Switch>
        <Navigation links={links} />
        {routes}
        <Route component={Error} />
      </Switch>
    </main>
  }
}

export default App;
