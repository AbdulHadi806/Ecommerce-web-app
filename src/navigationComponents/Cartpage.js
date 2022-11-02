import React from 'react'

// importing components
import Cart from '../components/Cart'

export default function Cartpage({currentUser}) {
  return (
    <>
    <Cart currentUser={currentUser}/>
    </>
  )
}