import Button from "./Button";

const ButtonNumber = ({ name, result, setResult }) => {
  const onClickButton = () => {
    if (result.length >= 15) return;
    // if (result === "0" || "버튼을 눌러라") {
    if (result === "0") {
      setResult(name);
    } else {
      setResult(result + name);
    }
  };
  return <Button name={name} onClickButton={onClickButton} />;
};

export default ButtonNumber;
