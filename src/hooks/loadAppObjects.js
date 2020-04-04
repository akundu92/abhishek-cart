import {useEffect} from 'react';
import {items,categories} from '../data';
import {loadItems,loadCategories} from '../actions';
import {useDispatch,useSelector} from 'react-redux';

export default ()=>{
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadItems(items));
        dispatch(loadCategories(categories));
      },[]);
}

