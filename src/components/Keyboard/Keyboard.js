import ButtonNumber from "../Buttons/ButtonNumber/ButtonNumber";
import ButtonEqual from "../Buttons/ButtonEqual/ButtonEqual";
import ButtonSign from "../Buttons/ButtonSign/ButtonSign";
import ButtonDot from "../Buttons/ButtonDot/ButtonDot";
import ButtonAC from "../Buttons/ButtonAC/ButtonAC";
import styled from "./Keyboard.module.css";

const Keyboard = ({ getValue, clearScreen }) => {
  return (
    <div className={styled.keyboard}>
      <ButtonSign getValue={getValue} sign="+" />
      <ButtonSign getValue={getValue} sign="-" />
      <ButtonSign getValue={getValue} sign="*" />
      <ButtonSign getValue={getValue} sign= "÷" />
      <ButtonNumber getValue={getValue} number="7" />
      <ButtonNumber getValue={getValue} number="8" />
      <ButtonNumber getValue={getValue} number="9" />
      <ButtonNumber getValue={getValue} number="4" />
      <ButtonNumber getValue={getValue} number="5" />
      <ButtonNumber getValue={getValue} number="6" />
      <ButtonNumber getValue={getValue} number="1" />
      <ButtonNumber getValue={getValue} number="2" />
      <ButtonNumber getValue={getValue} number="3" />
      <ButtonNumber getValue={getValue} number="0" />
      <ButtonEqual getValue={getValue} />
      <ButtonDot getValue={getValue} />
      <ButtonAC clearScreen={clearScreen} />
    </div>
  );
};

export default Keyboard;
