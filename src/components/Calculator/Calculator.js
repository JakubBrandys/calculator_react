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
    if (isNaN(Number(currentValue))) {
      clearScreen();
    }

    if (sign && !twiceValueFlag) {
      setCurrentValue("");
      setTwiceValueFlag(true);
    }

    if (currentValue === "0" && buttonValue === "0") {
      return;
    }

    if (currentValue === "0") {
      setCurrentValue("");
    }

    if (currentValue.includes(".") && buttonValue === ".") {
      return;
    }

    if ((!currentValue || currentValue === "0") && buttonValue === ".") {
      setCurrentValue("0.");
      return;
    }

    if (currentValue === "-" && buttonValue === ".") {
      setCurrentValue("-0.");
      return;
    }

    if (currentValue.length > 20) {
      return;
    }

    if (currentValue === "-" && buttonValue) {
      setCurrentValue(() =>`-${buttonValue}`);
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
    if ((twiceValueFlag || buttonSign !== '-') && currentValue.length < 1) {
      return;
    }

    if ((!currentValue && buttonSign === "-") || (currentValue === "-" && buttonSign)) {
      setCurrentValue("-");
      setPreviousValue("");
      return;
    }

    setSign(buttonSign);
    setPreviousValue(`${currentValue} ${buttonSign}`);
  };

  const handleEqual = () => {
    if (!sign) {
      return;
    }

    switch (sign) {
      case "+":
        setCurrentValue(String(Number(previousValue.slice(0, -1)) + Number(currentValue)));
        break;
      case "-":
        setCurrentValue(String(Number(previousValue.slice(0, -1)) - Number(currentValue)));
        break;
      case "*":
        setCurrentValue(String(Number(previousValue.slice(0, -1)) * Number(currentValue)));
        break;
      case "÷":
        if (currentValue === "0") {
          setCurrentValue("Cant divide by 0");
          break;
        }

        setCurrentValue(String(Number(previousValue.slice(0, -1)) / Number(currentValue)));
        break;
    }

    setPreviousValue("");
    setSign("");
    setTwiceValueFlag(false);
  }

  return (
    <div className={styled.calculator}>
      <Screen currentValue={currentValue} previousValue={previousValue} />
      <Keyboard
        getValue={getValue}
        clearScreen={clearScreen}
        getSign={getSign}
        handleEqual={handleEqual}
      />
    </div>
  );
};

export default Calculator;
