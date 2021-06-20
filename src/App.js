
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Clients from './pages/Clients'
import Estimates from './pages/Estimates'
import MyTeam from './pages/MyTeam'
import Invoices from './pages/Invoices'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/clients' exact component={Clients} />
        <Route path='/estimates' exact component={Estimates} />
        <Route path='/myTeam' exact component={MyTeam} />
        <Route path='/invoices' exact component={Invoices} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
