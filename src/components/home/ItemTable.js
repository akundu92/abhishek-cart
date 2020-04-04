import React from 'react';
import {useSelector} from 'react-redux';



import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
import ItemTableRow from './ItemTableRow';
  

const ItemTable=()=>{

    
    const items = useSelector(state => state.itemsState);
    const filterState=useSelector(state => state.filterState);



    //following method filters the item conditonally
    const filterItems=()=>{
        let filteredItems=[]
       if(filterState){
           items.map(item=>{
            if(item.cat_id===filterState.id)
            {
                filteredItems.push(item)
            }

           })
           return filteredItems;
       }
       else{
           return items;
       }

    }

    
    const itemsAfterFilter=filterItems();

    const renderTableRow=(items)=>{
        return items.map(item=><ItemTableRow item={item}> /</ItemTableRow>)
     }

    

    


    // Here we are conditionally displaying the items depending on the filter
    const listItems=()=>{

        
     if(itemsAfterFilter.length>0) {
    
        return (
            <Table multiSelectable={true} >
                 <TableHeader displaySelectAll={false}>
                    <TableRow>
                     <TableHeaderColumn>Select</TableHeaderColumn>
                      <center><TableHeaderColumn>Name</TableHeaderColumn></center>
                    </TableRow>
                   </TableHeader>
                   <TableBody>
                  
                {renderTableRow(itemsAfterFilter)}
                </TableBody>

            </Table>
        )
     }

     else{
     return (<h1>No Results</h1>)
     }

    }


    return (<>
    <ul>{listItems()}</ul>
     
    </>)
    // return(
    //     <Table>
    //       <TableHeader>
    //         <TableRow>
    //           <TableHeaderColumn>ID</TableHeaderColumn>
    //           <TableHeaderColumn>Name</TableHeaderColumn>
    //           <TableHeaderColumn>Status</TableHeaderColumn>
    //         </TableRow>
    //       </TableHeader>
    //       <TableBody>
    //         <TableRow>
    //           <TableRowColumn>1</TableRowColumn>
    //           <TableRowColumn>John Smith</TableRowColumn>
    //           <TableRowColumn>Employed</TableRowColumn>
    //         </TableRow>
    //         <TableRow>
    //           <TableRowColumn>2</TableRowColumn>
    //           <TableRowColumn>Randal White</TableRowColumn>
    //           <TableRowColumn>Unemployed</TableRowColumn>
    //         </TableRow>
    //         <TableRow>
    //           <TableRowColumn>3</TableRowColumn>
    //           <TableRowColumn>Stephanie Sanders</TableRowColumn>
    //           <TableRowColumn>Employed</TableRowColumn>
    //         </TableRow>
    //         <TableRow>
    //           <TableRowColumn>4</TableRowColumn>
    //           <TableRowColumn>Steve Brown</TableRowColumn>
    //           <TableRowColumn>Employed</TableRowColumn>
    //         </TableRow>
    //         <TableRow>
    //           <TableRowColumn>5</TableRowColumn>
    //           <TableRowColumn>Christopher Nolan</TableRowColumn>
    //           <TableRowColumn>Unemployed</TableRowColumn>
    //         </TableRow>
    //       </TableBody>
    //     </Table>
    //   )

}

export default ItemTable;

