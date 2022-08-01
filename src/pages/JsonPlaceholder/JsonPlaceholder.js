import React, { useState } from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'reactstrap';
import { jsonPlaceholderUrl } from '../../Helpers/config';
import { getJson } from '../../Helpers/customFn';

const JsonPlaceholder = () => {
  const [param, setPram] = useState('posts');
  const [jsonPlaceholderData, setJsonPlaceholderData] = useState([]);
  const [isJsonPlaceholderDataLoaded, setJsonPlaceholderDataLoaded] =
    useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getJson(`${jsonPlaceholderUrl}/${param}`);

        setJsonPlaceholderData(data);
        setJsonPlaceholderDataLoaded(true);
      } catch (err) {
        setError(err);
      }
    })();
  });

  return (
    <div className="json-placeholder">
      <Container>
        <Row>
          <Col lg={12}>
            <p>JsonPlaceholder....</p>
            <ButtonGroup>
              <Button>posts</Button>
              <Button>comments</Button>
              <Button>albums</Button>
              <Button>photos</Button>
              <Button>todos</Button>
              <Button>users</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default JsonPlaceholder;
