import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'reactstrap';
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
        const data = await getJson(`${fakeStoreApiUrl}/${productId}`);
        setProductData(data);
        setProductLoaded(true);
      } catch (err) {
        setFakeStoreApiError(err);
      }
    })();
  }, [productId]);

  const incProductIdHandler = () => {
    setProductId(productId + 1);
  };
  const decProductIdHandler = () => {
    setProductId(productId - 1);
  };

  return (
    <div className="home-page" id="homePage">
      <Container>
        <Row>
          <Col lg={12}>
            <ButtonGroup>
              <Button color="danger" onClick={decProductIdHandler}>
                Navigate Left...
              </Button>
              <Button color="warning">{productId}</Button>
              <Button color="success" onClick={incProductIdHandler}>
                Navigate Right...
              </Button>
            </ButtonGroup>
          </Col>
          <Col lg={12}>
            {fakeStoreApiError ? (
              <p>{fakeStoreApiError}</p>
            ) : (
              <p>{JSON.stringify(productData)}</p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
