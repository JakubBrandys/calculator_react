import styled from "./Button.module.css"

const ButtonNumber = ({ number }) => {
    return (
        <button className={styled.buttonNumber}>{number}</button>
    )
}

export default ButtonNumber;
