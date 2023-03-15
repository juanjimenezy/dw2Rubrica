import 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css';
import DetalleComponent from './components/DetalleComponent/DetalleComponent';
import { FooterComponent } from './components/FooterComponent/FooterComponent';
import { HeaderComponent } from './components/HeaderComponent/HeaderComponent';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateComponent from './components/CreateComponent/CreateComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <Router>
        <Switch>
          <Route path={'/content'}>
            <DetalleComponent/>
          </Route>
          <Route path={'/create'}>
            <CreateComponent/>
          </Route>
        </Switch>
      </Router>

      <FooterComponent className="my-3"/>
    </div>
  );
}

export default App;
