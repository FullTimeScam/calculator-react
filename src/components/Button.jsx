const Button = ({ name, onClickButton }) => {
  return (
    <button
      className="w-10 h-10 flex justify-center items-center border-2 border-gray-400 bg-gray-300 text-black font-bold hover:bg-gray-200 hover:shadow-none active:bg-gray-400"
      onClick={onClickButton}
    >
      {name}
    </button>
  );
};

export default Button;
