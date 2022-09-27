import style from "./ButtonEqual.module.css"

const ButtonEqual = ({ equal }) => {
  return (
    <button className={style.equal}>{equal}</button>
  );
};

export default ButtonEqual