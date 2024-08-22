import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import CardComponent from '../components/CardComponent';
import NavbarComponent from '../components/Navbar';
import newLists from '../data/News';

const News = () => {
  return (
    <div>
      <NavbarComponent />
      <Container fluid>
        <h1 style={{ color: 'red' }}>News Category</h1>

        <Row>
          {newLists.map((news, index) => {
            return (
              <Col key={index} xs={11} md={1} lg={1}>
                <CardComponent news={news} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default News;
