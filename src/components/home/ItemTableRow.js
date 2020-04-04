import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {addSelection,removeSelection} from '../../actions';

import {
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

  import Checkbox from 'material-ui/Checkbox';

const ItemTableRow=(props)=>{
    let {item} = props
    
    
    const item_ids = useSelector(state => state.selectionState);
    const dispatch = useDispatch();

    const onSelectionChange=(e)=>{
       
        
        if(e.target.checked){
            dispatch(addSelection(props.item))
        }
        else{
            dispatch(removeSelection(props.item))
        }
    };
    const checkChecked=()=>{

        if(item_ids.length===0){
            return false
        }
        return item_ids.includes(props.item.id);
    }


    
   
    // return (
    //     <>
    //     <li key={props.item.id}><input key={props.item.id} type="checkbox" checked={checkChecked()} onChange={onSelectionChange}/>{props.item.name}</li>
    //     </>
    // )

    return (
        <TableRow  onChange={onSelectionChange} selected={checkChecked()}>
            
            <TableRowColumn><center><Checkbox /></center></TableRowColumn>
            <TableRowColumn><center>{item.name}</center></TableRowColumn>
        </TableRow>
    )
}

export default ItemTableRow;