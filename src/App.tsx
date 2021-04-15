import './App.scss';
import { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Meals from './components/pages/Meals/Meals';
import History from './components/pages/History/History';
import Settings from './components/pages/Settings/Settings';
import Error from './components/pages/Error/Error';
import { Redirect, Route, Switch } from 'react-router';
import { WebRoute } from './utils/types'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import KitchenIcon from '@material-ui/icons/Kitchen';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';
import RecipeDetails from './components/pages/RecipeDetails/RecipeDetails';

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

    return <main className="max-h-screen min-h-screen p-10 flex space-x-10">
      <Navigation links={links} />
      <section className="hide-scrollbar overflow-auto max-h-screen">
        <Switch>
          {routes}
          <Route exact path="/recipe/:id" component={RecipeDetails} />
          <Redirect from='*' to='/' /> 
          <Route component={Error} />
        </Switch>
      </section>
    </main>
  }
}

export default App;
