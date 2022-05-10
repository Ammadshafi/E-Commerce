import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import "../App.css";
import { GlobalContext } from "../App";

let loading = true;
const Products = () => {
  const [data, setData] = useState([]);
  const { AddBasket } = useContext(GlobalContext);
  const [category, setCategary] = useState([]);
  const [filcat, setfilcat] = useState("");
  useEffect(() => {
    const Api = async () => {
      const Response = await axios.get(
        `https://fakestoreapi.com/products/${filcat}`
      );
      setData(Response.data);
      const rescategary = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      const category = await rescategary.data;
      setCategary(category);
    };
    loading = false;
    Api();
  }, [filcat]);

  if (loading === false) {
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
        <section className="products container text-center justify-content-center">
          {data.map((cur) => {
            const base = {
              id: cur.id,
              title: cur.title,
              desc: cur.description,
              amount: cur.price,
              img: cur.image,
            };
            return (
              <div className="shadow p-2 mx-2 " key={cur.id}>
                <Link
                  className="cards mx-2 my-2 card"
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
        </section>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default Products;
