import React from 'react'
import { Link } from 'react-router-dom'
import './BoneButton.css'

function BoneButton() {
  return (
    <div>
      <button className="bone">
        <Link to="/home"><div className="c1"></div></Link>
        <Link to="/home"><div className="c2"></div></Link>
        <Link to="/home"><div className="c3"></div></Link>
        <Link to="/home"><div className="c4"></div></Link>
        <Link to="/home"><div className="b1">
            <div className="b2">
                Go!
            </div>
        </div></Link>
      </button>
    </div>
  )
}

export default BoneButton