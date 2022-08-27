import { useEffect, useState } from "react";
import "./App.css";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { SettingsButton } from "./components/SettingsButton/SettingsButton";
import { VinylCard } from "./components/VinylCard/VinylCard";
import { Vinyl } from "./components/VinylTypes/Vinyl";
import vinyls from "./vinyls.json";

function App() {
  const [searchText, setSearchText] = useState("");
  const [filteredVinyls, setFilteredVinyls] = useState<Vinyl[]>([]);

  useEffect(() => {
    setFilteredVinyls(
      vinyls.filter((vinyl) =>
        vinyl.album.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  return (
    <div className="App">
      <h1>Vinyls</h1>
      <p>Your go to vinyl tracking application</p>
      <p>{searchText}</p>
      <SearchBox setSearchText={setSearchText} />
      <div className="Cards" style={{ display: "inline-flex" }}>
        {filteredVinyls.map((vinyl) => (
          <VinylCard {...vinyl} />
        ))}
      </div>
      <SettingsButton />
    </div>
  );
}

export default App;
