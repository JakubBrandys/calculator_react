import Keyboard from "../Keyboard/Keyboard";
import Screen from "../Screen/Screen";
import styled from "./Calculator.module.css";
import { useState } from "react";

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [previousValue, setPreviousValue] = useState("");
  const [sign, setSign] = useState("");
  const [twiceValueFlag, setTwiceValueFlag] = useState(false);

  const getValue = (buttonValue) => {
    if (sign && !twiceValueFlag) {
      setCurrentValue("");
      setTwiceValueFlag(true);
    }

    if (currentValue.length > 20) {
      return;
    }

    setCurrentValue((currentValue) =>`${currentValue + buttonValue}`);
  };

  const clearScreen = () => {
    setCurrentValue("");
    setPreviousValue("");
    setSign("");
    setTwiceValueFlag(false);
  };

  const getSign = (buttonSign) => {
    if (twiceValueFlag) {
      return;
    }

    setSign(buttonSign);
    setPreviousValue(`${currentValue} ${buttonSign}`);
  };

  return (
    <div className={styled.calculator}>
      <Screen currentValue={currentValue} previousValue={previousValue} />
      <Keyboard
        getValue={getValue}
        clearScreen={clearScreen}
        getSign={getSign}
      />
    </div>
  );
};

export default Calculator;
