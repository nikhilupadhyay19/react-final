import React, { useState, useEffect } from 'react';
import { fakeStoreApiUrl } from '../../Helpers/config';
import { getJson } from '../../Helpers/customFn';

const HomePage = () => {
  const [productId, setProductId] = useState(1);
  const [productData, setProductData] = useState([]);
  const [isProductLoaded, setProductLoaded] = useState(false);
  const [fakeStoreApiError, setFakeStoreApiError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getJson(`${fakeStoreApiUrl}/productId`);
        setProductData(data);
        setProductLoaded(true);
      } catch (err) {
        setFakeStoreApiError(err);
      }
    })();
  }, [productId]);

  return (
    <div className="home-page" id="homePage">
      <p>HomePage...</p>
    </div>
  );
};

export default HomePage;
