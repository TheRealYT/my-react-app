import React, { useState } from "react";
import "./App.css";
import { PauseIcon, PlayIcon } from '@heroicons/react/24/solid'

function App() {
  const [isPlaying, setPlay] = useState(true);
  const [played, setPlayed] = useState(30);
  const [like, setLike] = useState(false);

  return (
    <div class="p-5">
      <div class="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div class="flex">
          <span
            onClick={() => setPlay((isPlaying) => !isPlaying)}
            class="inline-flex items-center justify-center p-2 bg-blue-500 hover:bg-blue-600 cursor-pointer rounded-full shadow-lg"
          >
            {isPlaying ? <PauseIcon height="16" width="16" className="text-white" /> : <PlayIcon height="16" width="16" className="text-white" />}
          </span>

          <input
            type="range"
            onInput={(e) => setPlayed(e.value)}
            max={100}
            value={played}
            class="flex-1 mx-5"
          />

          <span
            onClick={() => setLike((like) => !like)}
            class="inline-flex items-center justify-center p-2 bg-transparent cursor-pointer rounded-full"
          >
            {like ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#2196f3"
                class="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />{" "}git config

              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 512 512"
                id="IconChangeColor"
              >
                <path
                  d="M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48px"
                  id="mainIconPathAttribute"
                  stroke="#2196f3"
                ></path>
              </svg>
            )}
          </span>
        </div>

        <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          Writes Upside-Down
        </h3>
        <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>
    </div>
  );
}

export default App;
