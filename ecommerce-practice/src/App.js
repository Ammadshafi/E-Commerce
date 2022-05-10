import "./App.css";
import React, { createContext, useReducer } from "react";
import reducer from "./contexts/reducer";
import Home from "./Components/Home";
import Card from "./Components/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsItem from "./Components/ProductsItem";
const BasketStore = {
  Products: [],
};
export const GlobalContext = createContext(BasketStore.Products);
function App() {
  let [state, dispatch] = useReducer(reducer, BasketStore);
  const AddBasket = (obj) =>
    dispatch({
      type: "Add",
      payload: obj,
    });
  const DeleteBasket = (id) =>
    dispatch({
      type: "Delete",
      payload: id,
    });
  return (
    <>
      <GlobalContext.Provider
        value={{ product: state.Products, AddBasket, DeleteBasket }}
      >
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route exact path="/card" element={<Card />} />
            <Route exact path="/:ids" element={<ProductsItem />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
