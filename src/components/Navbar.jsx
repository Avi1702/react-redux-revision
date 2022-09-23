import React from 'react'
import { Link } from 'react-router-dom'
import { Private } from './Private'

export const Navbar = () => {
  return (
    <div id='navbar'>
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/">Signup</Link>
        <Link to="/task">Add Task</Link>
    </div>
 )
}
