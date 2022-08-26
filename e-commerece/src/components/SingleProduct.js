import React from "react";
import { Button, Card } from "react-bootstrap";
import './singleProudct.css'

const SingleProduct = ({ prod }) => {


  const handleClick = (item) =>{
    fetch('http://localhost:3000/pruchaser',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
    console.log(item)
  }

  return (
    <>
      <div className="each-product">
      <Card style={{height: "calc(100vh /1.1)"}}>
      <Card.Img variant="top" src={prod.image} alt={prod.title} style={{height:300,width:350}} />
      <Card.Body>
        <Card.Title>{prod.title}</Card.Title>
        <Card.Subtitle style={{padding :10}}>
          <span>Price : $ {prod.price}</span>
          <br />
          <span>Rating : {prod.rating.rate}</span>
        </Card.Subtitle>
        <Button variant="primary" onClick={()=>handleClick(prod)}>Buy Product</Button>
      </Card.Body>
      </Card> 
    </div>
    </>
  );
};

export default SingleProduct;
