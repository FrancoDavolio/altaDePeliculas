import React from "react";
import { Card, Button } from "react-bootstrap";

const CardPeliculas = ({ peliculas, borrarPelicula }) => {
  return (
    <div className="border my-5">
      <div className="row justify-contet-around my-3 ms-3">
        {peliculas.map((p, i) => {
          return (
            <Card style={{ width: "18rem" }} key={i}>
              <Card.Body>
                <Card.Title>{p.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{p.genero}</Card.Subtitle>
                <Card.Text>{p.descripcion}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    borrarPelicula(p);
                  }}
                >
                  Borrar Pelicula
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CardPeliculas;
