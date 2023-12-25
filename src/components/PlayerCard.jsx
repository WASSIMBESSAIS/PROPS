import React from "react";
import { Button, Card } from "react-bootstrap";

const PlayerCard = ({ player, showBd }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          style={{ width: "18rem", height: "22rem" }}
          src={player.imgURL}
        />
        <Card.Body
          style={{
            width: "18rem",
            height: "18rem",
            display: "flex",
            flexDirection: "column",
            alignContent: "space-between",
          }}
        >
          <Card.Title style={{ width: "18rem", height: "5rem" }}>
            {player.name}
          </Card.Title>
          <Card.Text style={{ width: "18rem", height: "5rem" }}>
            age:{player.age} <br />
            team:{player.team}
            <br />
            JerseyNumber:{player.JerseyNumber}
            <br />
            nationality:{player.nationality}
            <br />
          </Card.Text>
          <Button
            onClick={() => showBd(player.name, player.Bd)}
            variant="primary"
            style={{ marginTop: 15 }}
          >
            ballon d'or
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

PlayerCard.defaultProps = {
  player: {
    id: Math.random(),
    imgURL:
      "https://debeste.de/upload/3aecae6eebcbc6d1e1af043095f40b965321.jpg",
    name: "Kylian Mbappe",
    age: 24,
    JerseyNumber: 10,
    team: "PSG",
    nationality: "France",
    Bd: "0",
  },
};

export default PlayerCard;
