import React, { useState } from "react";

const FormCustom = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleSubmit = () => {
    alert(`Username : ${username} | Password : ${password}`);
  };

  return (
    <main className="border p-3 rounded-2xl">
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl font-black mb-2">Fill this Form to Log in!</h1>
        <div>
          <div className="flex flex-col gap-2">
            <label>Username:</label>
            <input
              className="border rounded p-2"
              type="text"
              placeholder="johnd"
              onChange={(e) => {
                if (e.target.value.length < 3) {
                  setInputUsername("Username must be 3 characters or more");
                } else {
                  setInputUsername("");
                }

                setUsername(e.target.value);
              }}
            />
          </div>
          <h2 className="text-sm mt-2 text-red-500">{inputUsername}</h2>
          <div className="flex flex-col gap-2">
            <label>Password:</label>
            <input
              className="border rounded p-2"
              type="password"
              placeholder="*****"
              onChange={(e) => {
                if (e.target.value.length < 8) {
                  setInputPassword("Password must be 8 characters or more");
                } else {
                  setInputPassword("");
                }

                setPassword(e.target.value);
              }}
            />

            <h2 className="text-sm mt-2 text-red-500">{inputPassword}</h2>
          </div>
        </div>

        <div>
          <button
            disabled={username.length < 3 || password.length < 8}
            type="submit"
            className="w-full mt-4 rounded p-3 text-white font-black bg-black cursor-pointer hover:bg-stone-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default FormCustom;
