import React, { useState } from "react";
import "./App.css";
import { PauseIcon, PlayIcon, HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconO } from "@heroicons/react/24/outline";

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
            {isPlaying ? (
              <PauseIcon height="16" width="16" className="text-white" />
            ) : (
              <PlayIcon height="16" width="16" className="text-white" />
            )}
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
              <HeartIcon height="16" width="16" className="text-red-500" />
            ) : (
              <HeartIconO height="16" width="16" className="text-red-500" />
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
