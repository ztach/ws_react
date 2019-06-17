import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import './Item.scss';

const Item  = props => {

  // const rowEvents = {
  //   onClick: (e, row, rowIndex) => {
  //    // console.log(row,rowIndex);
  //   //  console.log(row.id,row.typ);
      
  //   }
  // };


const type = props.type; 
const columns = [{
  dataField: 'id',
  text: 'ID'
  // events: {
  //   onClick: (e, column, columnIndex, row, rowIndex) => { 
  //   //console.log(columnIndex,row)
  //   },
  // }
}, {
  dataField: 'typ',
  text: 'Typ Name'
  // events: {
  //   onClick: (e, column, columnIndex, row, rowIndex) => { 
  //   //console.log(columnIndex,row)
  //   },
  // }
}];

const selectRow = {
  mode: 'checkbox',
  clickToSelect: true,
  clickToExpand: true,
  onSelect: (row,e) => {
   console.log(e);
    }
};

const expandRow = {
  showExpandColumn: true,
  renderer: row => (
    <div className="row-expand" >
      <p>{ `wybrałeś kolumnę: ${row.id}` }</p>
    </div>
  )
};


  return ( 
    <>
    <BootstrapTable 
      keyField='id' 
      data={ type } 
      columns={ columns }  
      wrapperClasses="boo"
      headerClasses="id-custom-cell"
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
      <h1>wybrałeś:

      </h1>
      </>
   );
}
 
export default Item;
