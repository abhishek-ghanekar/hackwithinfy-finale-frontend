import React from 'react'
import { Link } from 'react-router-dom'

const LoggedInNavbar = () => {
  return (
    <header className="text-gray-600 body-font ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <img src="https://cdn-icons-png.flaticon.com/512/317/317569.png" height={45} width={45}/>
      <span className="ml-3 text-xl">Smart-Bharat</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900"><Link to='/'>
      Home
      </Link></a>
      <a className="mr-5 hover:text-gray-900">About</a>
      <a className="mr-5 hover:text-gray-900">S <Link to="/ShowRoute">how Route</Link></a>
      <a className="mr-5 hover:text-gray-900">Blogs</a>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      <Link to='/'>Logout
      </Link>
      
    </button>
  </div>
</header>

  )
}

export default LoggedInNavbar
