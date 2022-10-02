import styled from "./ButtonEqual.module.css";

const ButtonEqual = ({ handleEqual }) => (
  <button
    className={styled.equal}
    onClick={() => handleEqual()}
  >
    =
  </button>
);

export default ButtonEqual;
