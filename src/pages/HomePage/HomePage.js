import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'reactstrap';
import { fakeStoreApiUrl } from '../../Helpers/config';
import { getJson } from '../../Helpers/customFn';
console.log(getJson, fakeStoreApiUrl);

const HomePage = () => {
  const [productId, setProductId] = useState(1);
  const [productData, setProductData] = useState([]);
  const [isProductLoaded, setProductLoaded] = useState(false);
  const [fakeStoreApiError, setFakeStoreApiError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        console.log('useEffect');
        const data = await getJson('https://fakestoreapi.com/products/1');
        console.log(data);
        setProductData(data);
        setProductLoaded(true);
      } catch (err) {
        setFakeStoreApiError(err);
      }
    })();
  });

  return (
    <div className="home-page" id="homePage">
      <Container>
        <Row>
          <Col lg={12}>
            <ButtonGroup>
              <Button color="danger">Navigate Left...</Button>
              <Button color="warning">{productId}</Button>
              <Button color="success">Navigate Right...</Button>
            </ButtonGroup>
          </Col>
          <Col lg={12}>
            <p>{JSON.stringify(productData)}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
