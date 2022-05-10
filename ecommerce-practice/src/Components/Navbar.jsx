import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
   
<nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container" >
  <NavLink className="navbar-brand fw-bolder" to={"/"}>E-Commerce</NavLink>
  <div className="containers">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <form className="d-flex my-2">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-dark" type="submit">Search</button>
      </form>
    <NavLink className="btn btn-outline-dark my-2 mx-4" to={"/Card"}>Your Card</NavLink>

    </div>
  </div>
  </div>
</nav>
  )
}

export default Navbar