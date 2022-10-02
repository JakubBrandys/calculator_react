import styled from "./ButtonSign.module.css";

const ButtonSign = ({ sign, getSign }) => {
  return (
   <button
     className={styled.sign}
     onClick={() => getSign(sign)}
   >
     {sign}
   </button>
  );
};

export default ButtonSign;
