import "./App.css";
import SearchIcon from "../src/svgs/SearchIcon";
import RotatedSquare from "../src/svgs/RotatedSquare";
import Row from "../src/components/common/Row";
function App() {
  return (
    <div className="w-full bg-[#1e28320d] h-[60px]">
      <div className="w-full px-[10%] h-full">
        <div className="flex items-center justify-between h-full">
          <SearchIcon />
          <div className="flex items-center">
            <RotatedSquare />
            <h1 className="text-[28px] text-black mx-[10px]">Ecommerce</h1>
            <RotatedSquare />
          </div>
          <Row />
        </div>
      </div>
    </div>
  );
}

export default App;
