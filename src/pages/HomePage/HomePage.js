import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [product_ID, setProduct_ID] = useState('');
  const [product_DATA, setProduct_DATA] = useState([]);
  const [product_LOADED, setProduct_LOADED] = useState(false);

  useEffect(() => {
    
  });

  return (
    <div className="home-page" id="homePage">
      <p>HomePage...</p>
    </div>
  );
};

export default HomePage;
