import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'reactstrap';
import { fakeStoreApiUrl } from '../../Helpers/config';
import { getJson } from '../../Helpers/customFn';
import { ItemList } from '../../components/ItemList/ItemList';
import { ErrorShown } from '../../components/ErrorShown/ErrorShown';
import { Loader } from '../../components/Loader/Loader';

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
    if (productId < 20 && productId > 0) {
      setProductId(productId + 1);
      setProductLoaded(false);
    }
  };
  const decProductIdHandler = () => {
    if (productId > 1) {
      setProductId(productId - 1);
      setProductLoaded(false);
    }
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
              <ErrorShown data={fakeStoreApiError} />
            ) : !isProductLoaded ? (
              <Loader data="Product has been loaded.. Please wait.." />
            ) : (
              <ItemList data={productData} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
