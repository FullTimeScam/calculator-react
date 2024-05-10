import Button from "./Button";

const ButtonEnter = ({ name, operator, result, setResult, temp, setTemp }) => {
  const onClickButton = () => {
    switch (operator) {
      case "+":
        // temp = temp + result;
        setTemp(+temp + +result + "");
        setResult(+temp + +result + "");
        break;

      case "-":
        // temp = temp + result;
        setTemp(+temp - +result + "");
        setResult(+temp - +result + "");
        break;

      case "*":
        // temp = temp + result;
        setTemp(+temp * +result + "");
        setResult(+temp * +result + "");
        break;

      case "/":
        // temp = temp + result;
        setTemp(+temp / +result + "");
        setResult(+temp / +result + "");
        break;
      default:
        alert("잘못된 연산자입니다.");
    }
  };
  return <Button name={name} onClickButton={onClickButton} />;
};

export default ButtonEnter;
