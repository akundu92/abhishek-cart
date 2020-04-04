import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link, useHistory} from 'react-router-dom';

 const Header=()=>{


    const history=useHistory();
    const styles = {
        title: {
          cursor: 'pointer',
        },
      };
    const renderButtons=(authToken)=>{


        const buttonStyle = {
            backgroundColor: 'transparent',
            color: 'white'
          };

          const onAdminClick=()=>{
            history.push('./admin')
        }
       
          const onCartclick=()=>{
            history.push('./cart')
        }
       

        

          
        return(
        <>
            <FlatButton label="Admin" onClick={onAdminClick} style={buttonStyle}/>
            <FlatButton label="Cart" onClick={onCartclick} style={buttonStyle}/>
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