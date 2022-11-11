import "./global.css";
import { Header } from "./components/Header";
import iconBtn from "../src/assets/favico/apple-touch-icon.png";
import { useState, useEffect } from "react";
import { Movies } from "./components/Movie";

export function App() {
  const [count, setCount] = useState(-1);
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-blue-900 via-black to-red-800 flex flex-col items-center font-roboto lg:justify-start ">
      <Header />
      <Movies count={count} />
      <button
        className="bg-gray-50 flex justify-center items-center p-2 lg:mt-3 rounded hover:bg-gray-300 transition-colors"
        onClick={() =>
          setCount((count) => {
            if (count < 19) {
              return count + 1;
            }
            return 0;
          })
        }
      >
        <img src={iconBtn} alt="iconBtn" className="h-7 w-7 mr-2" />
        <a href="#" className="font-bold">
          Find movie
        </a>
      </button>

      <p className="text-white text-sm mt-6 font-light text-center lg:px-0 px-8">
        Click in "Find movie" to have information about some movie you would
        like to watch!
      </p>
    </div>
  );
}
