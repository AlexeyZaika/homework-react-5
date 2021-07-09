import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import Electronics from './electronics/Electronics';
import Laptops from './electronics/Laptops'
import Contacts from './contacts/Contacts';
import CardPage from './electronics/CardPage';
import PageNotFound from '../layout/PageNotFound';
import LaptopsMarks from './electronics/LaptopsMarks';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route exact path="/electronics" component={Electronics} />
      <Route exact path="/electronics/laptops" component={Laptops} />
      <Route exact path="/electronics/laptops/:mark" component={LaptopsMarks} />
      <Route path="/electronics/laptops/:mark/:id" component={CardPage} />
      <Route path="/contacts" component={Contacts} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  )
}

export default Routes

