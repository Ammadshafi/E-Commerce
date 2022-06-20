import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import "../App.css";
import { GlobalContext } from "../App";
import {  categoryData, productData } from "../Services/ProductApi";


const Products = () => {
  const [data, setData] = useState([]);
  const { AddBasket } = useContext(GlobalContext);
  const [category, setCategary] = useState([]);
  const [filcat, setfilcat] = useState("");
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    const categaryApi  =async()=>{
      const data=await categoryData()
      setCategary(data)
    }
    const productApi=async()=>{
      const data=await productData(filcat)
      setData(data)
      setLoading(false)
    }
    categaryApi()
    productApi()
  }, [filcat]);

  return (
    <div>
        <div className="card-list container my-4 text-center">
          <button
            className="btn btn-outline-dark mx-2 my-2"
            style={{ textTransform: "uppercase" }}
            onClick={() => setfilcat("")}
            >
            All
          </button>
          {category.map((cur) => (
            <button
            key={cur}
            className="btn btn-outline-dark mx-2"
            style={{ textTransform: "uppercase" }}
            onClick={() => setfilcat("category/" + cur)}
            >
              {cur}
            </button>
          ))}
          <hr />
        </div>
       {loading==false?
       <section className="products container text-center justify-content-center ">
          {data.map((cur) => {
            const base = {
              id: cur.id,
              title: cur.title,
              desc: cur.description,
              amount: cur.price,
              img: cur.image,
            };
            return (
              <div className="shadow cards my-2 p-2 mx-2 " key={cur.id}>
                <Link
                  className=" mx-2 my-2 card"
                  style={{
                    width: "18rem",
                    textDecoration: "none",
                    color: "black",
                    border: "none",
                  }}
                  to={`/${cur.id}`}
                >
                  <div>
                    <img
                      src={cur.image}
                      style={{ height: "250px" }}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <p className="card-title text-bold">{cur.title}</p>
                      <p
                        className="card-text"
                        style={{ textTransform: "uppercase" }}
                      >
                        {cur.category}
                      </p>
                      <h5 className="card-title">${cur.price}</h5>
                    </div>
                  </div>
                </Link>

                <button
                  className="btn btn-outline-dark buttun"
                  onClick={() => AddBasket(base)}
                >
                  Add To Basket
                </button>
              </div>
            );
          })}
        </section> :
    <Loading />
  }

      </div>
    );
 
};

export default Products;
