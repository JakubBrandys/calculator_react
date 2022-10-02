import styled from "./Screen.module.css";

const Screen = ({ currentValue, previousValue }) => {
    return (
        <div className={styled.screen}>
          <div className={styled.previous}>{previousValue}</div>
          <div className={styled.current}>
            {currentValue}
          </div>
        </div>
    );
};

export default Screen;
