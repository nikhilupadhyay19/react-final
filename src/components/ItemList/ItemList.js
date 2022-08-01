import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Col,
  Row,
} from 'reactstrap';

const ItemList = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <Row>
      <Col lg={6}>
        <Row>
          <Col>
            <CardBody>
              <img
                alt="Card image"
                src={data.image}
                className="img-fluid"
                style={{ width: 150 }}
              />
            </CardBody>
          </Col>
          <Col>
            <CardBody>
              <CardTitle tag="h5">{data.title}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                ₹{data.price}
              </CardSubtitle>
              <CardText>{data.description}</CardText>
            </CardBody>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export { ItemList };
