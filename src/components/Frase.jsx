import { Card } from "react-bootstrap";

Card
const Frase = ({personaje}) => {
  return (
    <section>
      <img
        src={personaje.image}
        alt={personaje.character}
        className="character"
      />
      <Card className="mt-3">
        <Card.Body>
          <Card.Title>{personaje.character}</Card.Title>
          <Card.Text>
          {personaje.quote}
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Frase;
