import { useState, useEffect } from "react";
import {
  Form,
  Button,
  FloatingLabel,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import CardPeliculas from "./CardPeliculas";

const Formulario = () => {
  const [id, setId] = useState(0);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [genero, setGenero] = useState("");

  const peliculasLocalStorage =
    JSON.parse(localStorage.getItem("peliculas")) || [];
  const [peliculas, setPeliculas] = useState(peliculasLocalStorage);

  useEffect(() => {
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }, [peliculas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Desde handleSubmit");
    const newPelicula = {
      id: id,
      nombre: nombre,
      descripcion: descripcion,
      genero: genero,
    };

    setPeliculas([...peliculas, newPelicula]);
    setId(0);
    setNombre("");
    setDescripcion("");
    setGenero("");
  };

  const borrarPelicula = (pelicula) => {
    const arregloModificado = peliculas.filter(
      (item) => item.id !== pelicula.id
    );
    setPeliculas(arregloModificado);
  };

  return (
    <Container>
      <h1 className="text-center">Alta de Peliculas</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <Form.Group
            className="mb-3 my-4"
            controlId="formBasicEmail"
            as={Col}
            md="7"
          >
            <Form.Label>Nombre de la Pelicula:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre de la Pelicula"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
          </Form.Group>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Descripcion de la pelicula"
            as={Col}
            md="7"
            className="my-4"
            onChange={(e) => setDescripcion(e.target.value)}
            value={descripcion}
          >
            <Form.Control as="textarea" style={{ height: "100px" }} />
          </FloatingLabel>
          <Form.Select
            as={Col}
            md="12"
            className="my-4"
            style={{ width: "740px" }}
            onChange={(e) => setGenero(e.target.value)}
            value={genero}
          >
            <option>Genero:</option>
            <option value="1">Comedia</option>
            <option value="2">Drama</option>
            <option value="3">Infantil</option>
          </Form.Select>
          <hr />
          <Button variant="primary" type="submit" as={Col} md="6">
            Enviar
          </Button>
        </Row>
      </Form>
      <CardPeliculas
        peliculas={peliculas}
        borrarPelicula={borrarPelicula}
      ></CardPeliculas>
    </Container>
  );
};

export default Formulario;
