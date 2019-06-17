import React from 'react';
import { Route,Switch } from 'react-router-dom';
import HomePage from '../HomePage/index';
import Gra from '../Gra/index';
//import ProductsPage from '../pages/ProductsPage';
import Konfig from '../Konfig/index';
import ContactPage from '../ContactPage/index';
import AdminPage from '../AdminPage/index';
//import LoginPage from '../pages/LoginPage';
//import ErrorPage from '../pages/ErrorPage';
import Plansza from '../Plansza/index';

const Pages = props => {
  //const {type,dict} = this.props;
  const {type,dict} = props;
  
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/gra"  render={props => <Plansza type={type} dict={dict}  />}  />
        <Route path="/ustawienia" render={props => <Konfig type={type} dict={dict}  />}   />
        <Route path="/contact"  component={ContactPage} />
        <Route path="/admin"  component={AdminPage} />
       </Switch>
      );
}
 
export default Pages;