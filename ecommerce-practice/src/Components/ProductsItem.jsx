import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../App";
import Loading from "./Loading";
import { productById } from "../Services/ProductApi";
const ProductsItem = () => {
  const { AddBasket } = useContext(GlobalContext);
  const[loading,setLoading]=useState(true)
  const [data, setdata] = useState({});

  const { ids} = useParams();
  useEffect(() => {
   const productApi=async()=>{
      const data=await productById(ids)
      setdata(data)
      setLoading(false)
   }
   productApi()
  }, []);

  const { image, id, title, description, price, category } = data;
  const product = {
    id: id,
    title: title,
    desc: description,
    amount: price,
    img: image,
  };

  return (
   <div className="container  my-5 shadow">
 {loading?<Loading/>:
 <div className="d-flex flex-lg-row  p-4 flex-column" style={{marginTop:'100px', minHeight:"60vh"}}>
      <div className="left  border border-danger py-2 px-4 rounded text-center ">
        <img src={image} alt="image" className="height" />
      </div>
      <div className="right d-flex flex-column mx-4 justify-content-between">
        <h1 className="text-danger">{title}</h1>
      <h3 className="text-light price p-2 bg-danger" >$ {price}</h3>
        <hr />

        <h2 className="text-capitalize" >{category}</h2>
      <h5>{description}</h5>
      <button className="btn btn-outline-dark text-capitalize" onClick={()=>AddBasket(product)}>order now</button>
      </div>

      
    </div>
 }
    
   </div>
  );
};

export default ProductsItem;
