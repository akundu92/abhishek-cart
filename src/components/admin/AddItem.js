import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import ItemFilter from '../home/ItemFilter';
import {addItem} from '../../actions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';






const AddItem=()=>{

    const dispatch=useDispatch();
    const [item,setItem]=useState('');

    const categoriesState=useSelector(state=>state.categoriesState);
    const filterState=useSelector(state=>state.filterState);

    const onAddItemClick=()=>{
      if(filterState){
      dispatch(addItem(item,filterState))
      }
      else{
        alert('Please select a Category')
      }
      
    }

    const onItemValueChange=(e)=>{
       setItem(e.target.value)
    }

    return (
        <>
    <ItemFilter/>
    <TextField value={item} onChange={onItemValueChange} hintText="Add new Item here"/>
    <br />
    <RaisedButton onClick={onAddItemClick}  label='Add Item' />
    </>
    )
}

export default AddItem;