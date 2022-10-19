import React from "react";
import {
  Form,
  Button,
  FloatingLabel,
  Row,
  Col,
  Container,
} from "react-bootstrap";

const Formulario = () => {
  return (
    <Container>
      <h1>Alta de CardPeliculas</h1>
      <br />
      <Form>
        <Row className="justify-content-center">
          <Form.Group
            className="mb-3 my-4"
            controlId="formBasicEmail"
            as={Col}
            md="7"
          >
            <Form.Label>Nombre de la Pelicula:</Form.Label>
            <Form.Control type="text" placeholder="Nombre de la Pelicula" />
          </Form.Group>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Descripcion de la pelicula"
            as={Col}
            md="7"
            className="my-4"
          >
            <Form.Control as="textarea" style={{ height: "100px" }} />
          </FloatingLabel>
          <Form.Select
            as={Col}
            md="12"
            className="my-4"
            style={{ width: "740px" }}
          >
            <option>Genero:</option>
            <option value="1">comedia</option>
            <option value="2">drama</option>
            <option value="3">infantil</option>
          </Form.Select>
          <Button variant="primary" type="submit" as={Col} md="6">
            Submit
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default Formulario;
