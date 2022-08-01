import React, { useState } from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'reactstrap';
import { jsonPlaceholderUrl } from '../../Helpers/config';

const JsonPlaceholder = () => {
  const [param, setPram] = useState();
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
