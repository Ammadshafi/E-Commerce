import React, { useContext } from "react";
import { GlobalContext } from "../App";
import Basketproducts from "./Basketproducts";
const Card = () => {
  const initialValue = 0;
  const { product } = useContext(GlobalContext);
  const Amount = product
    .map((cur) => cur.amount)
    .reduce((acc, acc2) => acc + acc2, initialValue)
    .toFixed(0);
  return (
    <>
      <div className="container my-4 d-flex row">
        <div className="col-6">
          <h1>Your Basket </h1>

          <Basketproducts />
        </div>

        <div
          className="bas  d-flex justify-content-end col-4 my-5 "
          style={{ height: "200px" }}
        >
          <div className="card bg-success " style={{ width: "18rem" }}>
            <div className="card-body text-center">
              <h1 className="card-title text-light text-uppercase">
                Total Price
              </h1>
              <h3 className="card-text text-light fw-bold">${Amount}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
