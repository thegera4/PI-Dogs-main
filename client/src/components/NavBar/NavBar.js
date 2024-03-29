import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/images/Befos_logo_nb.png"
import './NavBar.css'

export default function NavBar({createDogPage}) {
  return (
    <nav className="navbar">
        <img src={Logo} alt="Befos Logo" />
        {!createDogPage ? (
        <Link to="/dog">
          <span className="nav-span">
            Create your own breed!
          </span>
        </Link>
         ) : (
        null
          )
       }
    </nav>
  )
}
