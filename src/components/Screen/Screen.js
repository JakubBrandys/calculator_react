import styled from "./Screen.module.css";

const Screen = ({ value }) => {
    return (
        <div
          className={styled.screen}
        >
          {value}
        </div>
    );
};

export default Screen;
