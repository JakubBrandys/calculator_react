import styled from "./ButtonSign.module.css";

const ButtonSign = ({ sign, getValue }) => {
  return (
   <button
     className={styled.sign}
     onClick={() => getValue(sign)}
   >
     {sign}
   </button>
  );
};

export default ButtonSign;
