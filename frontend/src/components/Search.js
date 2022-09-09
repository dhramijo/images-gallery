import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const styles = {
  button: {
    marginLeft: 4,
  },
  col: {
    marginRight: 4,
  },
};

const Search = ({ word, setWord, handleSubmit }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Col xs={9} style={styles.col}>
              <Form.Control
                value={word}
                type="text"
                placeholder="Search for new image..."
                className="me-2"
                onChange={(event) => setWord(event.target.value)}
              />
            </Col>
            <Col>
              <Button
                style={styles.button}
                variant="primary"
                type="submit"
                className="pull-right"
              >
                Search
              </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
