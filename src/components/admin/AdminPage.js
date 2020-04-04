import React from 'react';
import AddCategory from './AddCategory';
import AddItem from './AddItem';
import loadAppObjects from '../../hooks/loadAppObjects'

const AdminPage=()=>{
    // loadAppObjects()
    return (<center>
            <AddCategory/>
            <br /> <br /> <br /> <br /> <br /> <br />
            <AddItem />
        </center>)
 }

 export default AdminPage;