import Game from './components/Game';
import Navbar from './components/Navbar';
import { useState ,useEffect} from 'react';

function App() {
  const [number, setNumber] = useState(4);
  const [showscreen, setScreen] = useState(false);
  const increaseNumber = (e) => {
    setScreen(false);
    setNumber(number + 1);
  }
  const decreaseNumber = (e) => {
    setScreen(false);
    setNumber(number - 1);
  }
  const reset = (e) => {
    setNumber(4)
    setScreen(false);
  }
  const showscreenGame = (e) => {
    if (number <= 3) {
      alert("Enter the number n>=4");
      return;
    }
    setScreen(true);
  }
  useEffect(() => {
    document.title = 'N Queens';
  }, []);
  return (
    <>
      <title>N Queens</title>
      <Navbar />
      <div className>
        <p className='flex justify-center mt-2 text-[2.5vw] font-bold'> {number} X {number} Queens</p>
        <div className='flex  flex-row  justify-evenly gap-2 mt-[2vh]'>
          <button onClick={increaseNumber} className="border-black bg-purple-300 basis-1/5 hover:bg-purple-500 text-[1.5vw] hover:scale-110 rounded-md"
          disabled={number>=20}>+1</button>
          <button onClick={decreaseNumber} className="bg-purple-300 basis-1/5 hover:bg-purple-500 hover:scale-110 text-[1.5vw] rounded-md" disabled={number==4}>-1</button>
          <button onClick={reset} className="bg-purple-300 basis-1/5 hover:bg-purple-500 hover:scale-110 text-[1.5vw] rounded-md">Reset</button>
          <button className="bg-purple-300 basis-1/5 hover:bg-purple-500 hover:scale-110 text-[1.5vw] rounded-md" onClick={showscreenGame}>Submit </button>

        </div>
        {
          showscreen ? <Game n={number} /> : ""
        }
      </div>

    </>
  );
}

export default App;
