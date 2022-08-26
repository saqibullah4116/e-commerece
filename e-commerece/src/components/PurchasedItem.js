import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import "./product.css";
import 'react-toastify/dist/ReactToastify.css';


const PurchasedItem = () => {
    const [product, setProduct] = useState(null);
    useEffect(() => {
      fetch("http://localhost:3000/pruchaser")
        .then((res) => {
          // console.log(res)
          return res.json();
        })
        .then((data) => {
          setProduct(data);
        });
    }, []);
  
    return (
      <>
        <div className="product-title">
          <h1>Purchased Item </h1>
        </div>
        {product ? (
          <div className="home-single-product">
            <div className="productContainer">
              {product &&
                product.map((eachItem) => {
                  // console.log(eachItem.title)
                  return <SingleProduct prod={eachItem} key={eachItem.id} />;
                })}
            </div>
          </div>
        ) : (
          <div className="product-title">
              <h1 style={{color:"red"}}>Your server is not responding</h1>
          </div>
        )}
  
        {/* displaying all the data */}
      </>
    );
}

export default PurchasedItem