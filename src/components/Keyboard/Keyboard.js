import ButtonNumber from "../ButtonNumber/ButtonNumber"
import ButtonEqual from "../ButtonEqual/ButtonEqual";
import ButtonSign from "../ButtonSign/ButtonSign";

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
      <ButtonEqual equal="=" />
      <ButtonSign sign="+" />
      <ButtonSign sign="-" />
      <ButtonSign sign="x" />
      <ButtonSign sign= "÷" />
    </>
  );
};

export default Keyboard;
