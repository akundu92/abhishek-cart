import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {removeFromCart} from '../../actions'



import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

  const style = {
    margin: 12,
  };

const CartDisplay=()=>{
    const cartState=useSelector(state=>state.cartState);
    const dispatch=useDispatch();

    const renderRows=()=>{
        return(
            cartState.map(item=>{
                return(
            <TableRow >
            <TableRowColumn>{item.id}</TableRowColumn>
            <TableRowColumn>{item.name}</TableRowColumn>
            </TableRow>
                )
            })
        )
    }

    const renderButton=()=>{
        return cartState.length>0?<center><RaisedButton label="Buy" primary={true} style={style}/><FlatButton label="Clear Cart" primary={true} style={style} onClick={()=>{dispatch(removeFromCart())}}/></ center>:''
    }

    return (<>
           <Table selectable={false}>
                 <TableHeader >
                    <TableRow>
                    <TableHeaderColumn>Id</TableHeaderColumn>
                     <TableHeaderColumn>Name</TableHeaderColumn>
                    </TableRow>
                   </TableHeader>
                   <TableBody>
                  
                {renderRows()}
                </TableBody>

            </Table>
            {renderButton()}
        </>)
 }

 export default CartDisplay;