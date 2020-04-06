import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ForgotPassword from './pages/ForgotPassword';
import Success from './pages/Success';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/success" component={Success} />
      </Switch>
    </BrowserRouter>
  );
}
