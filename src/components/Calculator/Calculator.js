import Keyboard from "../Keyboard/Keyboard";
import Screen from "../Screen/Screen";
import styled from "./Calculator.module.css";

const Calculator = () => {
  return (
    <div className={styled.calculator}>
      <Screen/>
      <Keyboard/>
    </div>
  );
};

export default Calculator;
