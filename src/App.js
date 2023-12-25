import { player } from "./Data";
import PlayerList from "./components/PlayerList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const playerinfo = player;
  const showBd = (name, number) => {
    alert(`${name} has ${number} ballon d'ors`);
  };
  return (
    <div className="App">
      <PlayerList playerinfo={playerinfo} showBd={showBd} />
    </div>
  );
}

export default App;
