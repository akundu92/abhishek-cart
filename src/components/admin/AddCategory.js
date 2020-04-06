import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {addCategory} from '../../actions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const AddCategory=()=>{
    const dispatch=useDispatch();
    const [category,setCategory]=useState('');
    const state=useSelector(state=>state)

    const onChange=(e)=>{
        setCategory(e.target.value)
    }

  
    const onClick=(e)=>{
        
        if(category){
            dispatch(addCategory(category));
            setCategory('');
        }
       else{
           alert('Category can not be Empty')
       }
    }

    
    return (<>
    {/* <input value={category} onChange={onChange}></input> */}
    <TextField value={category} onChange={onChange}  hintText="Add new Category Here"/> <br />
    <RaisedButton onClick={onClick} label='Add Category'></RaisedButton>
   
    </>)
}

export default AddCategory;