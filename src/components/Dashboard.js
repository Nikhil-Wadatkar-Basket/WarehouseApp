import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      
      <ul>
        <li>
          <Link to={"/list"}>Employee List</Link>
        </li>
      </ul>
    </div>
  )
}

export default Dashboard