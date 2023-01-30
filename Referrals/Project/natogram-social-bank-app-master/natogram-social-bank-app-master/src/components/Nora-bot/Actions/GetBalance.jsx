import React from 'react'

const GetBalance = () => {

    // const loggedUser = localStorage.getItem('loggedUser');
    const accInfo = localStorage.getItem('accInfo');

  return (
    <div>{accInfo}</div>
  )
}

export default GetBalance