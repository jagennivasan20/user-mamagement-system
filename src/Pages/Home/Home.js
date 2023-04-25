import React, {useState } from 'react'
import "./Home.css"
import {useDispatch} from "react-redux"
import {addUser} from "../../store/actions/user"
const Home = () => {
const [userInfo,setUserInfo] = useState({
  name:"",
  email:"",
  phone:"",
  address:""

})
const dispatch = useDispatch()


const handelChange =(e)=>{
 const {name,value} = e.target
 setUserInfo((currValue)=>{
  return{
    ...currValue,
    [name]:value
  }
 })
}

const handelClick =()=>{
  if(userInfo.name.trim()===""||
    userInfo.email.trim()===""||
    userInfo.phone.trim()===""||
    userInfo.address.trim()===""
    )
    {
    alert("please fill all detiles")
    return
  }
 dispatch(addUser(userInfo))
 setUserInfo({
  name:"",
  email:"",
  phone:"",
  address:""
 })
}

  return (
    <div className='home'>
        <h1 className='home__title'>Enter Your detiles</h1>
        <div className='home__container'>
          <label>Name:</label>
          <br/>
          <input name='name'value={userInfo.name} onChange={handelChange} type='text'/>
          <br/>
          <label>Email:</label>
          <br/>
          <input name='email' value={userInfo.email} onChange={handelChange} type='email'/>
          <br/>
          <label>Phone No:</label>
          <br/>
          <input name='phone' value={userInfo.phone} onChange={handelChange} type='tel'/>
          <br/>
          <label>Address:</label>
          <br/>
         <textarea name='address' value={userInfo.address} onChange={handelChange} rows={6}/>
          <br/>
          <button onClick={handelClick}>Add user</button>
        </div>
    </div>
  )
}

export default Home