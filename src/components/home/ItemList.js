import React from 'react';
import {useSelector} from 'react-redux';
import ItemDisplay from './ItemDisplay';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';


const ItemList=()=>{
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

    


    // Here we are conditionally displaying the items depending on the filter
    const listItems=()=>{

        
     if(itemsAfterFilter.length>0) {
    
        return itemsAfterFilter.map(item=><ItemDisplay item={item}> /</ItemDisplay>)
     }

     else{
     return (<h1>No Results</h1>)
     }

    }


    return (<>
    <ul>{listItems()}</ul>
     
    </>)
}

export default ItemList;