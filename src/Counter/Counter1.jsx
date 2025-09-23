import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, deleteAll, increment } from "../store/counterSlice";

const Counter1 = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);

  const handleIncrementRedux = () => {
    dispatch(increment());
  };

  const handleDecrementRedux = () => {
    dispatch(decrement());
  };

  const handleRemove = () => {
    dispatch(deleteAll())
  }

  return (
    <div>
      <div className="flex items-center justify-center flex-col border p-3 rounded bg-gray-300">
        <div>
          <h1 className="font-black text-5xl mb-10">
            {count} - {counter}
          </h1>
        </div>
        <div className="space-x-10">
          <div>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br cursor-pointer font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2"
              onClick={() => setCount(count - 1)}
            >
              -
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br cursor-pointer font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
          </div>

          <div>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br cursor-pointer font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2"
              onClick={handleDecrementRedux}
            >
              -
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br cursor-pointer font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2"
              onClick={handleIncrementRedux}
            >
              +
            </button>

            <button onClick={handleRemove}>❌</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter1;
