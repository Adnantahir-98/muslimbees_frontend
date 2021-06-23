import {Switch, Route} from 'react-router-dom'
import Login from './Screens/Login'
import Dashboard  from './Screens/Dashboard';
import Communication from './Screens/Communication'
import ProfileVerification from './Screens/ProfileVerification';
import UserManagement from './Screens/UserManagement';
import Tickets from './Screens/Tickets'
import Payments from './Screens/Payments'
import AllUsers from './Screens/Allusers'
import Configurations from './Screens/configuration'
import './App.css';





function App() {
  return (
    <div className="App">
        
        <Switch>
        
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Dashboard} />
          <Route path="/communication" exact component={Communication} />
          <Route path="/profileverify" exact component={ProfileVerification} />
          <Route path="/usermanagement" exact component={UserManagement} />
          <Route path="/config" exact component={Configurations} />
          <Route path="/tickets" exact component={Tickets} />
          <Route path="/payments" exact component={Payments} />
          <Route path="/allusers" exact component={AllUsers} />

        </Switch>
        
    </div>
  );
}

export default App;

