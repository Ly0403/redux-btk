import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import CategoryList from "../categories/CategoryList";
import ProductList from "../products/ProductList";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col xs="3">
              <CategoryList></CategoryList>
            </Col>
            <Col xs="9">
              <ProductList></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
