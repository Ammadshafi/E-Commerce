import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../App";

const ProductsItem = () => {
  const { AddBasket } = useContext(GlobalContext);

  const [data, setdata] = useState({});

  const { ids } = useParams();
  useEffect(() => {
    const Api = async () => {
      const Response = await axios.get(
        `https://fakestoreapi.com/products/${ids}`
      );
      setdata(Response.data);
    };
    Api();
  }, []);

  const { image, id, title, description, price, category } = data;
  const base = {
    id: id,
    title: title,
    desc: description,
    amount: price,
    img: image,
  };

  return (
    <>
      <div className="container">
        <div className="card mb-3 my-4 " style={{ width: "content-fit" }}>
          <div className="row">
            <img
              src={image}
              className="card-img-top col-6 "
              alt="loading..."
              style={{ height: "300px", maxWidth: "700px" }}
            />

            <div className="card border-dark mb-3 col-lg-5 col-12">
              <div className="card-header text-uppercase">
                <h1>{category}</h1>
              </div>
              <div className="card-body text-dark">
                <p className="card-text fw-bold">{description}</p>
              </div>
            </div>
          </div>
          <div className="card-body my-4">
            <h1 className="card-title">{title}</h1>
            <h1 className="mx-2">${price}</h1>

            <button
              className="btn btn-outline-dark my-4"
              onClick={() => AddBasket(base)}
            >
              order now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsItem;
