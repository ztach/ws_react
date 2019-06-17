import React, { PureComponent } from 'react';

const TypeList = props => {
  
  const {id,typ} = props.type;
    
  return ( 
    <div className="typeList">
    {id} {typ}
  </div>

   );
}
 

const DictList = props => {
  const {id,sl,gt,pt,typ} = props.dict;

  
  return ( 
    <div className="dictsList">
    {id} {sl} {gt} {pt} {typ}
    </div>
   );
}
 


class Konfig extends PureComponent { 

 
 render () {
    const {dict,type} = this.props; 
    const types=type.map(el=>(
      <TypeList  key={el.id} type={el}/>
    ))

    const dicts=dict.map(el=>(
      <DictList key={el.id} dict={el} />
    ))

    
    return (
      <div className="KonfigWrapper">
        <div className="typList">
          <h1>Typy pytań</h1>  
            {types}
        </div>
      <div className="dictList">
          <h1>Lista elementów słownika</h1>
          {dicts}
      </div>
      </div>
    );
  } 
}

export default Konfig;
