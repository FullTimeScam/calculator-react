import Calculator from "./components/Calculator";
import React from "react";

const App = () => {
  const ClickAlert = (message) => {
    return () => {
      alert(message);
    };
  };
  return (
    <div className="bg-DOSGreen min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4md font-bold text-white">나우누리 </h2>
      <h1 className="text-4xl font-bold text-white mb-8">온-라인 칼구레다</h1>
      <h2 className="text-4md font-mono text-white">
        256byte 당 通信料 300원 차감
      </h2>
      <div className="bg-gray-300 border-2 border-gray-500 p-2 w-auto">
        <div className="flex justify-between items-center bg-gray-400 border-b-2 border-gray-500 p-1">
          <span className="text-black pl-2 font-bold">계산기</span>
          <div>
            <button
              className="bg-gray-300 w-4 h-4 mr-1"
              onClick={ClickAlert("요금 4,832원 부과!")}
            >
              ㅡ
            </button>
            <button
              className="bg-gray-300 w-4 h-4 mr-1"
              onClick={ClickAlert("요금 7,832원 부과!")}
            >
              □
            </button>
            <button
              className="bg-gray-300 w-4 h-4 mr-1"
              onClick={ClickAlert("요금 2,832원 부과!")}
            >
              X
            </button>
          </div>
        </div>
        <Calculator />
      </div>
      <h2 className="text-4md font-mono font-thin text-white text-right">
        {/*텍스트를 오른쪽 정렬하고 싶은데 안된다.*/}
        (주)나우콤.1994
      </h2>
    </div>
  );
};

export default App;
