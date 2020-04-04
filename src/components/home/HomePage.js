import React from 'react';
import {useDispatch,useSelector} from 'react-redux';

import {addToCart,removeAllSelection} from '../../actions';
import RaisedButton from 'material-ui/RaisedButton';
import ItemFilter from './ItemFilter';
import ItemTable from './ItemTable';
import {useHistory} from 'react-router-dom'




const HomePage=()=>{
    const dispatch = useDispatch();
    const history=useHistory();
    const state = useSelector(state => state);
    const selectionState = useSelector(state => state.selectionState);
    const itemsState = useSelector(state => state.itemsState);

    // useEffect(() => {
    //     dispatch(loadItems(items));
    //     dispatch(loadCategories(categories));
    //   },[]);
    // loadAppObjects();



    const addToCartOnClick=()=>{
        let cartItems=[]
        selectionState.map(selection=>{
            cartItems.push(itemsState.find(item=>item.id===selection))
            
        })
        dispatch(addToCart(cartItems))
        dispatch(removeAllSelection())
        history.push('./cart')
    }

        
    console.log(state);

    const renderButton=()=>{
        return itemsState.length>0?<center><RaisedButton label="Add to Cart" primary={true} onClick={addToCartOnClick}/></ center>:''
    }
    

    return (<center>
            <ItemFilter/>
            {/* <ItemList />  */}
            {/* <button onClick={addToCartOnClick}>Add to Cart</button> */}
            <ItemTable />
            {renderButton()}
        </center>)
 }

 export default HomePage;