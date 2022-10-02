import styled from "./ButtonDot.module.css";

const ButtonDot = ({getValue}) => (
  <button
    onClick={() => getValue(".")}
    className={styled.ButtonDot}
  >
    .
  </button>
);

export default ButtonDot;
