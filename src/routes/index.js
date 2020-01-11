import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Route from './Route';

import Main from '../pages/Main';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Schedule from '../pages/Schedule';
import Register2 from '../pages/SignUp/register-2';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={SignIn} />
        <Route path="/register" exact component={SignUp} />
        <Route path="/registerFinish" exact component={Register2} />
        <Route path="/schedule" component={Schedule} isPrivate />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}
