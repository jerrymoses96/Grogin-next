import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="w-[50%] flex flex-col  items-center ">
        <div className="w-[70%] flex flex-col gap-3 items-center ">
          <div className="text-center mb-10  ">
            <p className="text-5xl font-medium mb-3">WELCOME BACK</p>
            <p className="text-xl font-light">
              Welcome back! Please enter your details.
            </p>
          </div>
          <div className="flex flex-col w-[100%] ">
            <label className="font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="border border-[#000000
            ]  p-3 mt-3 rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col w-[100%]">
            <label className="font-semibold" htmlFor="password">
              password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="border border-[#000000
            ]  p-3 mt-3 rounded-lg drop-shadow-md"
            />
          </div>
          <p className="font-semibold self-end ">forgot password?</p>\
          <button
            className="bg-[#634C9F] w-full text-white font-semibold p-3 rounded-lg"
          >
            Sign in
          </button>
          <button className="border flex justify-center gap-2 items-center border-[#000000] w-full font-semibold p-3 rounded-lg">
            <Image src={"/image/google.png"} alt="grogin" width={30} height={30}/>
            Sign in with Google</button>
            <p className="font-semibold">Don’t have an account? Sign up fo free!</p>
        </div>
      </div>
      <div className="w-[50%] h-dvh">
        <Image
          src="/image/login.png"
          alt="grogin"
          width={100}
          height={100}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default Login;
