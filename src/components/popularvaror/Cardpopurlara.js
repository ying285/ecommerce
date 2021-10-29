import { Card, Button } from "react-bootstrap";

const Cardpopulara = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <i class="bi bi-heart text-end p-3" />
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Cardpopulara;
