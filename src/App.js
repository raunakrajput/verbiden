import React from 'react'
import Profile from "./Profile"
import Login from './Login';
import { useSelector } from 'react-redux';
import {selectUser} from "./redux/userSlice"


const App = () => {
  const user=useSelector(selectUser);
  return (
    <div>
    {user?<Profile/>:<Login/>}
    </div>

  )
}

export default App





