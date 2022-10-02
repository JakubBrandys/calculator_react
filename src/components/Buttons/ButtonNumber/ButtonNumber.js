import styled from "./ButtonNumber.module.css";

const ButtonNumber = ({ number, getValue }) => (
  <button
    className={styled.buttonNumber}
    onClick={() => getValue(number)}
  >
    {number}
  </button>
);

export default ButtonNumber;
