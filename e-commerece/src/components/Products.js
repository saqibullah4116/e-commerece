import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import "./product.css";


const Products = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => {
        // console.log(res)
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        // console.log(data)
      });
  }, []);

  return (
    <>
      <div className="product-title">
        <h1>Shope Now </h1>
      </div>
      {product ? (
        <div className="home-single-product">
          <div className="productContainer">
            {product &&
              product.map((eachItem) => {
                return <SingleProduct prod={eachItem} key={eachItem.id} />;
              })}
          </div>
        </div>
      ) : (
        <div className="product-title">
            <h1 style={{color:"red"}}>Waiting for server to respond</h1>
        </div>
      )}
    </>
  );
};

export default Products;
