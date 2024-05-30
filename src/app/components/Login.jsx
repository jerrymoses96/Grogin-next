"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Cookies from 'js-cookie';
import HeaderTop from './header/HeaderTop';
import { calculateTimeLeft } from './general/calculateTimeLeft';

const Login = () => {
  const [initialTimeLeft, setInitialTimeLeft] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Calculate the initial time left on the client side
    setInitialTimeLeft(calculateTimeLeft());
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login', {
        username: email,
        password: password,
      });

      if (response.data.token) {
        // Store the token in a cookie
        Cookies.set('token', response.data.token, { expires: 7 }); // Expires in 7 days
        // Redirect or update UI as needed
        console.log('Login successful');
      }
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div>
      <HeaderTop initialTimeLeft={initialTimeLeft} />
      <div className="flex items-center justify-between">
        <div className="w-[50%] flex flex-col items-center ">
          <div className="w-[70%] flex flex-col gap-3 items-center ">
            <div className="text-center mb-5">
              <p className="text-4xl font-medium mb-3">WELCOME BACK</p>
              <p className="text-lg font-light">
                Welcome back! Please enter your details.
              </p>
            </div>
            <form onSubmit={handleLogin} className="flex flex-col w-[100%]">
              <div className="flex flex-col w-[100%]">
                <label className="font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  name="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="border border-[#000000] p-3 mt-3 rounded-lg shadow-md"
                />
              </div>
              <div className="flex flex-col w-[100%]">
                <label className="font-semibold" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="border border-[#000000] p-3 mt-3 rounded-lg drop-shadow-md"
                />
              </div>
              <p className="font-semibold self-end">forgot password?</p>
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="bg-[#634C9F] w-full text-white font-semibold p-3 rounded-lg"
              >
                Sign in
              </button>
            </form>
            <button className="border flex justify-center gap-2 items-center border-[#000000] w-full font-semibold p-3 rounded-lg">
              <Image
                src="/image/google.png"
                alt="Sign in with Google"
                width={30}
                height={30}
              />
              Sign in with Google
            </button>
            <p className="font-semibold">
              Don’t have an account? Sign up for free!
            </p>
          </div>
        </div>
        <div className="w-[50%]">
          <Image
            src="/image/login.png"
            alt="Login Image"
            width={100}
            height={100}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
