import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {filterItem} from '../../actions';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const ItemFilter=()=>{
    const filterState=useSelector(state=>state.filterState)
    const categories=useSelector(state=>state.categoriesState)
    const dispatch=useDispatch();

    // const renderOptions=()=>{
    // return categories.map(category=><option value={category.id}>{category.name}</option>)
    // }
    const renderOptions=()=>{
    return categories.map(category=><MenuItem key ={category.id} value={category.id} primaryText={category.name} ></MenuItem>)
    }


    // const renderDropdown=()=>{
    //     return(<div>
    //            <select id="lang" selected={filterState?filterState.name:"All"} onChange={onFilterChange}>
    //            <option value="All">All</option>
    //            {renderOptions()}
    //            </select>
            
    //        </div>)

    // }
    const renderDropdown=()=>{
        return(<div>
               <DropDownMenu value={filterState?filterState.id:"All"} onChange={onFilterChange} openImmediately={false}>
               {/* <select id="lang" selected={filterState?filterState.name:"All"} onChange={onFilterChange}> */}
               {/* <option value="All">All</option> */}
               <MenuItem value="All" primaryText="All" />
               {renderOptions()}
               </DropDownMenu>
            
           </div>)

    }

    const onFilterChange=(e,k,v)=>{

       categories.map(category=>{
        //    console.log(v);
           
        if(category.id===v){
            
            dispatch(filterItem(category))
        }
        if(v==="All"){
            
            dispatch(filterItem(null))
        }
    })
        
    }

return (<>{renderDropdown()}</>)
}

export default ItemFilter;