import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import './Navigation.css';


const menuList = [
  {name:'info',path:'/',style:'info_selected',exact:true},
  {name:'gra',path:'/gra',style:'gra_selected'},
  {name:'ustawienia',path:'/ustawienia',style:'ustawienia_selected'},
  {name:'kontakt',path:'/contact',style:'contact_selected'},
  {name:'panel admina',path:'/admin',style:'admin_selected'}
]



class Navigation extends Component {
state = {
  isOpen: false
};



toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {

  const menu = menuList.map(item => (
    <li className="navli" key={item.name}>
        <NavLink activeClassName={item.style} to={item.path}
        exact={item.exact? item.exact : false }
        >
            {item.name}
        </NavLink>
    </li>
    )
)

return (
    <nav  className="navigation" >
        <ul className="navul">
            {menu}
        </ul>
    </nav>

 );

  }
}

export default Navigation;

