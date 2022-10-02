import Keyboard from "../Keyboard/Keyboard";
import Screen from "../Screen/Screen";
import styled from "./Calculator.module.css";
import { useState } from "react";

const Calculator = () => {
  const [value, setValue] = useState("");

  const getValue = (buttonValue) => {
    setValue((value) =>`${value + buttonValue}`)
  }

  const clearScreen = () => {
    setValue("")
  }

  return (
    <div className={styled.calculator}>
      <Screen currentValue={value} previousValue="25325" />
      <Keyboard
        getValue={getValue}
        clearScreen={clearScreen}
      />
    </div>
  );
};

export default Calculator;
