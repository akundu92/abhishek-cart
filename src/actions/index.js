import {LOAD_ITEMS,
    ADD_ITEM,
    ADD_TO_CART,
    ADD_CATEGORY,
    LOAD_CATEGORIES,
    FILTER_ITEM,
    REMOVE_ALL_FROM_CART,
    ADD_SELECTION,
    REMOVE_SELECTION,
    REMOVE_ALL_SELECTION} from './constants';


function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

export const loadItems=(items)=>{
   
    return {
        type: LOAD_ITEMS,
        payload: items
    }
}

export const addItem=(name,category)=>{

    
    return {
        type: ADD_ITEM,
        payload: {
            id:uuidv4(),
            name:name,
            cat_id:category.id
        }}
    }


export const filterItem=(category)=>{
    
    return {
        type: FILTER_ITEM,
        payload:category
    }

}

export const loadCategories=(categories)=>{

    return {
        type: LOAD_CATEGORIES,
        payload: categories
    }

}

export const addCategory=(name)=>{
    return {
        type: ADD_CATEGORY,
        payload : {
        id: uuidv4(),
        name: name
    }
    }

}

export const addToCart=(items)=>{
    return {
        type: ADD_TO_CART,
        payload: items
    }


}

export const addSelection=(item)=>{
    return {
        type: ADD_SELECTION,
        payload: item
    }
}
export const removeSelection=(item)=>{
    return {
        type: REMOVE_SELECTION,
        payload: item
    }
}

export const removeAllSelection=()=>{
    return {
        type: REMOVE_ALL_SELECTION,
        payload: {}
    }
}



export const removeFromCart=()=>{
    return {
        type: REMOVE_ALL_FROM_CART,
        payload: {}
    }


}

