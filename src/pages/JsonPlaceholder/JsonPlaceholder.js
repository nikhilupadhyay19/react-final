import React from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'reactstrap';

const JsonPlaceholder = () => {
  return (
    <div className="json-placeholder">
      <Container>
        <Row>
          <Col lg={12}>
            <p>JsonPlaceholder....</p>
            <ButtonGroup>
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default JsonPlaceholder;
