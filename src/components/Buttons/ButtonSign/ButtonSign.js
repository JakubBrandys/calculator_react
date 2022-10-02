import styled from "./ButtonSign.module.css";

const ButtonSign = ({ sign, getValue }) => {
  return (
   <button
     onClick={() => getValue(sign)}
     className={styled.sign}
   >
     {sign}
   </button>
  );
};

export default ButtonSign;
