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

        <div class="mt-2">
          <input class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2196f3] sm:text-sm sm:leading-6 outline-none" />
        </div>

        <div class="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <span class="pl-3 py-1.5 flex select-none items-center">@web/</span>
            <input class="w-full border-0 pl-1 px-3 py-1.5 block flex-1 border-0 bg-transparent placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none" />
          </div>
      </div>
    </div>
  );
}

export default App;
