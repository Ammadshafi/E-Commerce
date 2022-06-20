import React,{ useContext } from 'react'
import {NavLink} from 'react-router-dom';
import { GlobalContext } from "../App";

const Navbar = () => {
  const { product } = useContext(GlobalContext);
  const sup=product.length==0?null:product.length
  return (
   
<nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
  <div className="container" >
  <NavLink className="navbar-brand fw-bolder" to={"/"}>E-Commerce</NavLink>
  <div className="containers">
    <div className="collapse navbar-collapse" >
    <NavLink className="fw-bold fs-5 my-2 mx-4" to={"/Card"}><i class="fa-solid fa-cart-shopping"><sup className='shadow mx-2'>{sup}</sup></i></NavLink>

    </div>
  </div>
  </div>
</nav>
  )
}

export default Navbar