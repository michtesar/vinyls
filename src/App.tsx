import "./App.css";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { SettingsButton } from "./components/SettingsButton/SettingsButton";
import { VinylCard } from "./components/VinylCard/VinylCard";
import vinyls from "./vinyls.json";

function App() {
  return (
    <div className="App">
      <h1>Vinyls</h1>
      <p>Your go to vinyl tracking application</p>
      <SearchBox />
      <div className="Cards" style={{ display: "inline-grid" }}>
        <VinylCard {...vinyls[0]} />
        <VinylCard {...vinyls[1]} />
        <VinylCard {...vinyls[2]} />
        <VinylCard {...vinyls[3]} />
        <VinylCard {...vinyls[4]} />
      </div>
      <SettingsButton />
    </div>
  );
}

export default App;
