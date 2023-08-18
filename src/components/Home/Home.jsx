import React, { useState, useEffect } from "react";
import "./Home.css";
import { getAllProducts } from "../../ApiService/api";
import { Link } from "react-router-dom";
function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-grid">
      {products.map((prod) => (
        <div className="product" key={prod.id}>
          <img src={prod.image} alt="product_image" />

          <h2>{prod.title}</h2>

          <p>
            <span className="price">$:{prod.price}</span>
          </p>
          <Link to={`/product/${prod.id}`}>
            <button>Product Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
