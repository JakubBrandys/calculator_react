import styled from "./ButtonEqual.module.css";

const ButtonEqual = ({ getValue }) => (
  <button
    onClick={() => getValue("=")}
    className={styled.equal}
  >
    =
  </button>
)
export default ButtonEqual;
