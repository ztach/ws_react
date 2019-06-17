import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import '../Item/Item.scss';

//import Item from '../Item/Item'
//mport './Plansza.scss';
//const Plansza = props => {

class Plansza extends React.Component {

  state ={
    wybor:[],
    id:[],
    checked:false
  }

render(){
  const {type,dict} = this.props;
 

  //const type = this.props.type; 
  const columns = [{
    dataField: 'id',
    text: 'ID',
    headerStyle: (colum, colIndex) => {
      return { width: '45px', padding: '5px' };
    }
  }, 
  {
    dataField: 'typ',
    text: 'Typ Name',
    headerStyle: (colum, colIndex) => {
      return { width: '165px', padding: '5px' };
    }
  }];
  
  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    clickToExpand: true,
    hideExpandAll: true,
    selectColumnStyle: ({
      checked,
    }) => {
      if (checked) {
        return {
          backgroundColor: 'rgb(177, 166, 166)'
        };
      }
     
    },

    onSelect: (row,checked) => {
      let  wybor  = [...this.state.wybor];
      row.checked = checked;
      wybor=[...wybor,row];
      const id = row.id;
      if(checked){
        this.setState(prevState => ({
          wybor
        }))
      }else{
        wybor = wybor.filter(typ => typ.id !== id)
        this.setState({
        wybor
        })
      }
    },

    onSelectAll: (isSelect, rows, e) => {
      if(isSelect){
      rows.forEach(el => {
        el.checked = isSelect;
      });
        this.setState({
          wybor:rows
        })
      }else{
        this.setState({
          wybor:[]
        })
      }
    }
  };
  
  const expandRow = {
    showExpandColumn: true,
    renderer: (row) => (
      <div className="row-expand" >
        <p>{ row.checked? `wybrałeś wiersz o id=${row.id} i typ=${row.typ}`: null }</p>
      </div>
    )
  };
  
  let types=this.state.wybor.map(el => (
    <li key={el.id}> <span>id: {el.id}</span> typ: {el.typ} </li>
  ))
  
  return ( 
    <div className="wrap">
    <BootstrapTable 
      keyField='id' 
      data={ type } 
      columns={ columns }  
      wrapperClasses="boo"
      headerClasses="headerClas"
      rowClasses="custom-row-class"
      colsClasses="custom-col-class"
      selectRow={ selectRow }
      classes="foo"
      expandRow={ expandRow }
      bordered={false}
      striped
      hover
      condensed
      />
      <div className="wybrane">
      {types.length === 0 ? <h1>wybierz typ gry</h1> : <h1>wybrałeś:</h1>}
          <ul>
          <h4>{types}</h4>
          </ul>
      </div>
      </div>
   );
  }

}


export default Plansza;

