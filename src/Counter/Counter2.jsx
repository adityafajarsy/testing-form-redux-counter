import React, { useState } from "react";

const Counter2 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="flex items-center justify-center flex-col border p-3 rounded bg-gray-300">
        <div>
          <h1 className="font-black text-5xl mb-10">{count}</h1>
        </div>
        <div className="space-x-10">
          <div>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br cursor-pointer font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2"
              onClick={() => setCount(count - 1)}
            >
              -
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br cursor-pointer font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter2;
