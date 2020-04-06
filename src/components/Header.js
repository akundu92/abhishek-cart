import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link, useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

 const Header=()=>{

    const cartState=useSelector(state=>state.cartState);
    const history=useHistory();
    const styles = {
        title: {
          cursor: 'pointer',
        },
      };
    const renderButtons=(authToken)=>{


        const buttonStyle = {
            backgroundColor: 'transparent',
            color: 'white',
            marginTop:'07px',
            fontWeight: 'bold',
            size:'large',
            variant:'text'
          };

          const onAdminClick=()=>{
            history.push('./admin')
        }
       
          const onCartclick=()=>{
            history.push('./cart')
        }
       
        const renderCartButton=()=>{
          return (cartState.length>0?<FlatButton label={`Cart(${cartState.length})`} onClick={onCartclick} style={buttonStyle}/>
        :<FlatButton label="Cart" onClick={onCartclick} style={buttonStyle}/>)
        }
        

          
        return(
        <>
            <FlatButton label="Admin" onClick={onAdminClick} style={buttonStyle}/>
            {renderCartButton()}
        </>
        )
        
        
    }
    const onTitleClick=()=>{
        history.push('./')
    }

    return (<>

        <MuiThemeProvider>
            <AppBar onTitleClick={onTitleClick} title={<span style={styles.title}>Home</span>} zDepth={1} iconElementRight={renderButtons()}/> 
        </MuiThemeProvider>
        </>)
 }

 export default Header;