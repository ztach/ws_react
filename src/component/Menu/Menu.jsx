import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Page from '../Page/Page';
import Footer from '../Footer/Footer';

import './Menu.scss';

class Menu extends Component { 


  render () {
    const {type,dict} = this.props;
    return (
      <Router basename={process.env.PUBLIC_URL} >
      <div className="app">
        <header className="header">
          <div className="head">
          {<Header />}
          </div>
          <div className="nav">
          {<Navigation/>}
          </div>
        </header>
        <main>
          <section className="page">
          {<Page  type={type} dict={dict} />}
          </section>
        </main>
        <footer>
          {<Footer / >} 
        </footer>
        </div>
      </Router>
    );
  }
}


export default Menu;
