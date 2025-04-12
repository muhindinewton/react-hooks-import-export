import React from "react";
import howManyParks from "./parks/howManyParks";
import { trees, wildlife } from "./parks/RockyMountain";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  console.log(trees);
  console.log(wildlife);

  return (
    <div>
      <h1>Colorado State Parks!</h1>
      <p style={{fontFamily:"sans-serif" ,fontSize:"22px"}}> Trees found: {trees} <br/>

      Wildlife found: {wildlife()}
      </p>
      


    </div>
  );
}

export default ColoradoStateParks;
