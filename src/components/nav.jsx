import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <a href="">Home</a>
      <Link to= "/todo" >
      <a href="">Todo calculator</a>
      </Link>
      <a href="">Blog</a>
    </div>
  )
}
