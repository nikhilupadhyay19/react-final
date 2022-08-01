import React, { Fragment } from 'react';
import ProductStore from '../ProductStore/ProductStore';
import JsonPlaceholder from '../JsonPlaceholder/JsonPlaceholder';

const HomePage = () => {
  return (
    <Fragment>
      <ProductStore />
      <JsonPlaceholder />
    </Fragment>
  );
};

export default HomePage;
