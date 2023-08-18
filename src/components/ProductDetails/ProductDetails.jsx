import React, { useEffect, useState } from "react";
import { getProductsId } from "../../ApiService/api";
import { useParams, Link } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await getProductsId(id);
      setProductDetails(data);
    };
    fetchProductDetails();
  }, [id]);
  const handleBuyNow = () => {
    window.confirm("The Product Is Out of Stock");
  };
  return (
    <div className="pro-details">
      <img src={productDetails.image} alt="img" className="img" />

      <div className="product-info">
        <h2 className="product-title">{productDetails.title}</h2>
        <p className="product-description">{productDetails.description}</p>

        <p className="product-price">{productDetails.price}</p>

        <button className="buynow" onClick={handleBuyNow}>
          Buy now
        </button>
        <Link to="/">
          <button className="goback">Go Back Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
