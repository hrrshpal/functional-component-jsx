import image from "./images/bulbasaur.jpg";
import "./showcase.css";

function Showcase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip",
  };
  const imageStyle = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
  };
  return (
    <div className="container">
      <div>
        {favPokemon}
        <h1>Showcase Component</h1>
        <img style={imageStyle} src={image} alt="bulbasaur" />
        <h2>
          {favPokemon}'s type is{" "}
          <span className="firstSpan">{pokeCharacteristics.type}</span> and one
          of their move is
          <span className="secondSpan">{pokeCharacteristics.move}</span>
        </h2>
      </div>
    </div>
  );
}

export default Showcase;
