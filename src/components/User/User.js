import React from 'react'
import "./User.css"

const User = ({user :{name,email,phone,address},deleteUser }) => {
  
  return (
    <div className="user">
      <h1 className="user__title">{name}</h1>
      <div className="user__info">
      <h4>Email:</h4>
      <p>{email}</p>
      </div>
      <div className="user__info">
      <h4>Phone No:</h4>
      <p>{phone}</p>
      </div>
      <div className="user__info">
      <h4>address:</h4>
      <p>{address}</p>
      </div>
      <button className='user__delete' onClick={deleteUser}>Delete</button>
    </div>
  )
}

export default User