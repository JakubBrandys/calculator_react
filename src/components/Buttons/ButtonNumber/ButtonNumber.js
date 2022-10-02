import styled from "./ButtonNumber.module.css";

const ButtonNumber = ({ number, getValue }) => (
  <button
    onClick={() => getValue(number)}
    className={styled.buttonNumber}
  >
    {number}
  </button>
);

export default ButtonNumber;
