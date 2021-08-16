import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import User from '../account/user';
import Show from '../account/show';
import Withdrawal from '../account/withdrawal';
import Deposit from '../account/deposit';
import NewAccount from '../account/newaccount';
import AccountDetails from '../account/accountdetails';
import AccountHistory from '../account/accounthistory';
import '../fontawesomeicons';

const App = () => {
   return(
      <Router>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/user/:id" component={User} />
            <Route path="/show/:id" component={Show} />
            <Route path="/account/withdrawal/:id" component={Withdrawal} />
            <Route path="/account/deposit/:id" component={Deposit} />
            <Route path="/newaccount/:id" component={NewAccount} />
            <Route path="/account/details/:id" component={AccountDetails} />
            <Route path="/account/history/:id" component={AccountHistory} />
         </Switch>
      </Router>
   )
}

export default App;
