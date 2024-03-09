'use client';
import { useState } from 'react';

export default function Home() {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <main className="bg-black p-6 flex flex-col justify-between text-white tracking-wider leading-relaxed font-neue_montreal h-[100dvh] md:h-[100vh]">
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <div className="flex text-2xl">
          k
          <span
            className={`mr-4 transition ease-in-out duration-300 ${
              hover ? 'text-white' : 'text-black'
            }`}
          >
            atharina
          </span>
          c
          <span
            className={`mr-4 transition ease-in-out duration-300 ${
              hover ? 'text-white' : 'text-black'
            }`}
          >
            halupsky
          </span>
        </div>
        <div className="text-sm mt-5 text-white max-w-[300px]">
          <p>
            i am a graphic designer, illustrator and web developer from vienna.
          </p>
        </div>
      </div>
      <div
        className="text-2xl"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <a href="mailto:katharina@chalupsky.eu?subject=hi! 💫">say hi!</a>
      </div>
    </main>
  );
}
