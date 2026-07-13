import { TILES } from "../../utils/constants";
import { Tile } from "./Tile";
import { WeatherWidget } from "./WeatherWidget";

export function Dashboard({ onOpen }) {
  return (
    <>
      <div className="flex gap-4 mb-5 flex-wrap">
        <WeatherWidget />
      </div>
      <div className="flex gap-4 flex-wrap">
        {TILES.map((tile) => (
          <Tile key={tile.id} tile={tile} onOpen={onOpen} />
        ))}
      </div>
    </>
  );
}
