import {FILTER_ITEM} from '../actions/constants'

const INITIAL_STATE=null




//userId,userEmail,userName,userImageUrl
export const filterState=(state=INITIAL_STATE,action)=>{
    // console.log('I am here');
   
    

    switch(action.type){
        
        case(FILTER_ITEM):{
            console.log(action.payload);
            
            return action.payload     
        }

        default:{
            return state
        }
    }
}
    