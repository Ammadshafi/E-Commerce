import React, { useContext } from "react";
import { GlobalContext } from "../App";
import { Link } from "react-router-dom";
const Basketproducts = () => {
  const { product } = useContext(GlobalContext);
  const { DeleteBasket } = useContext(GlobalContext);

  console.log(product);
  if (product.length === 0) {
    return <h1>YOUR CARD IS EMPTY</h1>;
  } else {
    return (
      <div>
        {product.map((cur,ind) => (
          <div className=" border p-2 my-4" key={ind}>
            <Link className="container  " to={`/${cur.id}`}>
              <div
                className="cards mb-3  p-4"
                style={{
                  maxWidth: "540px",
                  overflow: "hidden",
                  border: "none",
                }}
              >
                <div className="row g-0">
                  <div className="col-md-4 my-2">
                    <img
                      src={cur.img}
                      className="img-fluid rounded-start "
                      alt="..."
                      style={{ height: "250px" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5
                        className="card-title text-dark"
                        style={{ border: "none" }}
                      >
                        {cur.title}
                      </h5>
                      <div
                        className="card-text"
                        style={{ overflow: "hidden", height: "150px" }}
                      >
                        {cur.desc}
                      </div>
                      <h5 className="card-text text-dark">${cur.amount}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <button
              className=" btn-lg bg-danger text-light border"
              style={{ marginTop: "-100px" }}
              onClick={() => DeleteBasket(cur.id)}
            >
              Remove Item
            </button>
          </div>
        ))}
      </div>
    );
  }
};

export default Basketproducts;
