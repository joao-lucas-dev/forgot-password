import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ForgotPassword from './pages/ForgotPassword';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/forgot-password" component={ForgotPassword} />
      </Switch>
    </BrowserRouter>
  );
}
