import styled from "./ButtonEqual.module.css";

const ButtonEqual = ({ getValue }) => (
  <button
    className={styled.equal}
    onClick={() => getValue("=")}
  >
    =
  </button>
);

export default ButtonEqual;
