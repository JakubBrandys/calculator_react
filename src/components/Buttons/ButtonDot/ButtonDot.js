import styled from "./ButtonDot.module.css";

const ButtonDot = ({getValue}) => (
  <button
    className={styled.ButtonDot}
    onClick={() => getValue(".")}
  >
    .
  </button>
);

export default ButtonDot;
