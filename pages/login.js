import React, { useState } from "react";
import { RiLoginCircleFill } from "react-icons/ri";
import { useRouter } from "next/router";

const login = () => {
  const router = useRouter();
  const [employeeDetails, setEmployeeDetails] = useState({
    id: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const submitLogin = () => {
    if (employeeDetails.id.length > 0 && employeeDetails.password.length > 0) {
      router.push(`/scan`);
    } else {
      setError(true);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center bg-gray-900 px-5">
      <div class="py-3 w-full text-xl bg-white text-black text-center fixed top-0">
        Login
      </div>
      <div class="w-full items-center justify-center flex flex-col">
        <input
          onChange={(e) =>
            setEmployeeDetails({ ...employeeDetails, id: e.target.value })
          }
          type="text"
          class="p-2 bg-gray-100 rounded-md text-center outline-none my-2 "
          placeholder="enter employee id"
        />
        <input
          onChange={(e) =>
            setEmployeeDetails({ ...employeeDetails, password: e.target.value })
          }
          type="text"
          class="p-2 bg-gray-100 rounded-md text-center outline-none my-2 "
          placeholder="enter password"
        />
        <div
          onClick={() => submitLogin()}
          class="px-3 py-2 bg-white rounded-md my-3 cursor-pointer flex items-center justify-center"
        >
          <div class="mx-2">Login</div>
          <RiLoginCircleFill className="text-2xl" />
        </div>
        {error && (
          <div class="px-3 py-2 bg-red-500 text-white rounded-md ">
            Invalid Credentials
          </div>
        )}
      </div>
    </div>
  );
};

export default login;
