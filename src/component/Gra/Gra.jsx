import React, { PureComponent } from 'react';
import './Gra.scss';
import Menu from '../Menu/index';
import {Link} from 'react-router-dom';

//import Slownik from './Gra.styles';


class Gra extends PureComponent { 
    state = {
      dict:[],
      type:[],
      isLoaded:false,
      hasError: false,
      isActive:false
    };
  

  fetchData = () => {
  fetch('data/dictionary.json')
    .then(response => response.json())
    .then(data => {
      const dt = data.dict;
      const w = this.state.dict;
      if (dt.length !== w.length){
      this.setState({
        dict:data.dict,
        type:data.type,
        isLoaded: !this.state.isLoaded
      })
    }
  })
  .catch(err => {
    // Do something for an error here
    console.log("Error Reading data " + err);
  });
}


  componentDidCatch = () => {
    setTimeout(this.fetchData, 1000);
  }

  componentDidMount = () => {
    setTimeout(this.fetchData, 1000);
  }

  componentDidUpdate = () => {
    setTimeout(this.fetchData, 1000);
  }

  // getTypeDict = () => {
  //   let type = [...this.state.dict];
  //   type=type.map(d => d.typ);
  //   const uniqueTyp = Array.from(new Set(type));
    
  // }

  render () {
    
    const {dict,type,isLoaded} = this.state;
    return (
      <div className="GraWrapper">
      {isLoaded ? <Menu dict={dict} type={type} /> : "czekaj na załadowanie" } 
      
      </div>
    );
  }
}


export default Gra;
