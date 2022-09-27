import styled from "./ButtonEqual.module.css";

const ButtonEqual = ({ equal }) => {
  return (
    <button className={styled.equal}>{equal}</button>
  );
};

export default ButtonEqual;
