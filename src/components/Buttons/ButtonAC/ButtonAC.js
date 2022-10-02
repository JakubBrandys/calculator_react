import styled from "./ButtonAC.module.css";

const ButtonAC = ({ clearScreen }) => (
  <button
    className={styled.buttonAc}
    onClick={() => clearScreen()}
  >
    AC
  </button>
);

export default ButtonAC;
