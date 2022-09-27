import ButtonNumber from "../Buttons/ButtonNumber/ButtonNumber"
import ButtonEqual from "../Buttons/ButtonEqual/ButtonEqual";
import ButtonSign from "../Buttons/ButtonSign/ButtonSign";
import ButtonDot from "../Buttons/ButtonDot/ButtonDot";

const Keyboard = () => {
  return (
    <>
      <ButtonNumber number="1" />
      <ButtonNumber number="2" />
      <ButtonNumber number="3" />
      <ButtonNumber number="4" />
      <ButtonNumber number="5" />
      <ButtonNumber number="6" />
      <ButtonNumber number="7" />
      <ButtonNumber number="8" />
      <ButtonNumber number="9" />
      <ButtonEqual />
      <ButtonSign sign="+" />
      <ButtonSign sign="-" />
      <ButtonSign sign="x" />
      <ButtonSign sign= "÷" />
      <ButtonDot />
    </>
  );
};

export default Keyboard;
