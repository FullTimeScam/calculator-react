import Calculator from "./components/Calculator";

const App = () => {
  return (
    <div className="bg-DOSGreen min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4md font-bold text-white">
        나우누리 (주)나우콤.1994{" "}
      </h2>
      <h1 className="text-4xl font-bold text-white mb-8">온-라인 계산기</h1>
      <h2 className="text-4md font-bold text-white">
        256byte 당 통신비 300원 차감
      </h2>
      <div className="bg-gray-300 border-2 border-gray-500 p-2 w-auto">
        <div className="flex justify-between items-center bg-gray-400 border-b-2 border-gray-500 p-1">
          <span className="text-black pl-2 font-bold">계산기</span>
          <div>
            <button className="bg-gray-300 w-4 h-4 mr-1">ㅡ</button>
            <button className="bg-gray-300 w-4 h-4 mr-1">□</button>
            <button className="bg-gray-300 w-4 h-4 mr-1">X</button>
          </div>
        </div>
        <Calculator />
      </div>
    </div>
  );
};

export default App;
