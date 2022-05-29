import axios from "axios";
import "./landingPage.css";
import { useState, useEffect } from "react";

const LandingPage = () => {
  const [products, setProducts] = useState(null);
  const [isLoader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  const getProduct = () => {
    setLoader(true);
    axios
      .get("https://fakestoreapi.com/products1")
      .then((res) => {
        setProducts(res.data);
        setLoader(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoader(true);
      });
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
  <div className="landingPage">
      {
          isLoader ? <div>Loading...</div> 
          : products && products.length > 0 ? 
            products.map((product, index) => (
              <div key={index} id={'products' + index}>{product.title}</div> 
            ))
            : error ? <div>{error}</div>
            : <div>Opps!! something went wrong</div>
      }
  </div>
  );
};
export default LandingPage;
