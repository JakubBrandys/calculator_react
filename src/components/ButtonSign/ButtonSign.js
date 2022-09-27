import styled from "./ButtonSign.module.css";

const ButtonSign = ({ sign }) => {
  return (
   <button className={styled.sign}>{sign}</button>
  );
};

export default ButtonSign;
