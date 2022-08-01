import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [productId, setProductId] = useState('');
  const [productData, setProductData] = useState([]);
  const [isProductLoaded, setProductLoaded] = useState(false);

  useEffect(() => {});

  return (
    <div className="home-page" id="homePage">
      <p>HomePage...</p>
    </div>
  );
};

export default HomePage;
