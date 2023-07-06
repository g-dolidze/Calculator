import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="page">
      <div className="calculator">
        <div className="display">
          <div className="prev">12132312423</div>
          <div className="new">w212312213</div>
        </div>
        <hr />
        <div className="btns">
          <button className=" simbol">AC</button>
          <button className=" simbol">DEL</button>
          <button className="simbol">%</button>
          <button className="simbol">/</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="simbol">x</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className="simbol">-</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className="simbol">+</button>
          <button>0</button>
          <button>,</button>
          <button className="sum simbol">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
