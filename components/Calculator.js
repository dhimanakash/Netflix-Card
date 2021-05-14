import React from "react";
import Add from "./data";
import { Sub, Mult, Divi } from "./data";

function Calculator() {
  return (
    <>
      <h1>Basic Calculator</h1>
      <ul>
        <li>sum of two no is {Add(2, 4)}</li>
        <li>sub of two no is {Sub(4, 2)}</li>
        <li>Mul of two no is {Mult(2, 2)}</li>
        <li>Div of two no is {Divi(4, 2)}</li>
      </ul>
    </>
  );
}

export default Calculator;
