import './App.scss';
import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import Dashboard from './components/Dashboard/Dashboard';
import Meals from './components/Meals/Meals';
import History from './components/History/History';
import Settings from './components/Settings/Settings';
import { Route, Switch } from 'react-router';
import { WebRoute } from './utils/types'
import Error from './components/Error/Error';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import KitchenIcon from '@material-ui/icons/Kitchen';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';

class App extends Component {
  render() {
    const links: WebRoute[] = [
      { url: "/", altLabel: "Home", component: Dashboard, icon: <HomeOutlinedIcon/> }, 
      { url: "/meals", altLabel: "Meals", component: Meals, icon: <KitchenIcon/>},
      { url: "/history", altLabel: "History", component: History, icon: <HistoryIcon/>}, 
      { url: "/settings", altLabel: "Settings", component: Settings, icon: <SettingsIcon/> }, 
    ];

    const routes = [];

    for (const [index, item] of links.entries()) {
      routes.push(<Route key={index} exact path={item.url} component={item.component} />);
    }

    return <main className="m-10 flex">
      <Navigation links={links} />     
      <section className="hide-scrollbar overflow-auto max-h-screen">
        <Switch>
          {routes}
          <Route component={Error} />
        </Switch>
      </section>               
    </main>
  }
}

export default App;
