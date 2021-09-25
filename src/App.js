import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeesComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path="/" exact component={ListEmployeeComponent}></Route>
              <Route path="/employees" exact component={ListEmployeeComponent}></Route>
              <Route path="/add-employee/:id" component={CreateEmployeeComponent}></Route>
              {/* <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route> */}
              <Route path="/employees/:id" component={ViewEmployeeComponent}></Route>
            </Switch>
          </div>
        <FooterComponent />
      </Router>
    </div>


  );
}

export default App;
