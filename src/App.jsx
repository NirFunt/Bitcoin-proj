import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/scss/global.scss';
import { AppHeader } from './cmps/AppHeader';
import { HomePage } from './views/HomePage';
import { ContactPage } from './views/ContactPage';
import { ContactEditPage } from './views/ContactEditPage';
import { ContactDetailsPage } from './views/ContactDetailsPage';
import { AppFooter } from './cmps/AppFooter';
import { ChartPage } from './views/ChartPage';

export function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Switch>
          <Route component={ContactEditPage} path={'/contact/edit/:id?'} />
          <Route component={ContactDetailsPage} path={'/contact/:id'} />
          <Route component={ContactPage} path={'/contact'} />
          <Route component={ChartPage} path={'/chart'} />
          <Route component={HomePage} path={'/'} />
        </Switch>
        <AppFooter />
      </div>
    </Router>
  );
}

