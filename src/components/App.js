import React from 'react';
import {BrowserRouter,Route,Router,HashRouter} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import AdminPage from './admin/AdminPage';
import CartDisplay from './cart/CartDisplay';
import HomePage from './home/HomePage';
import loadAppObjects from '../hooks/loadAppObjects';

const App=()=> {
      loadAppObjects();
        return(
    <MuiThemeProvider>
        
    <BrowserRouter >
      <div>
      <Header/>
          <Route path='/' exact component={HomePage}></Route>
          <Route path='/admin' exact component={AdminPage}></Route>
          <Route path='/cart' exact component={CartDisplay}></Route>
           
      </div>
   </BrowserRouter>
   </MuiThemeProvider>
  
        )
    }

export default App;