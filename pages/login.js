import React from "react";

const login = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <div class="w-full items-center justify-center flex flex-col">
        <input
          type="text"
          class="p-2 bg-gray-100 rounded-md text-center"
          placeholder="enter id"
        />
        <a
          href="/scan"
          class="px-3 py-2 bg-white rounded-md my-3 cursor-pointer"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default login;
