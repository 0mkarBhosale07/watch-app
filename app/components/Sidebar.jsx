import React from "react";
import { Calendar, TrendingUp, Home, Heart } from "lucide-react";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar bg-black text-white w-72 h-screen py-5 px-10">
        <div className="logo">
          <h1 className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M24 10.6667H25.3333C26.7478 10.6667 28.1044 11.2287 29.1046 12.2288C30.1048 13.229 30.6667 14.5856 30.6667 16.0001C30.6667 17.4146 30.1048 18.7711 29.1046 19.7713C28.1044 20.7715 26.7478 21.3334 25.3333 21.3334H24"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.66666 10.6667H24V22.6667C24 24.0812 23.4381 25.4378 22.4379 26.438C21.4377 27.4382 20.0812 28.0001 18.6667 28.0001H8C6.58551 28.0001 5.22896 27.4382 4.22876 26.438C3.22857 25.4378 2.66666 24.0812 2.66666 22.6667V10.6667Z"
                fill="white"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 1.33325V5.33325"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.3333 1.33325V5.33325"
                stroke="#7900C2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.6667 1.33325V5.33325"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="mx-2 font-bold text-xl">Watch</span>
          </h1>
        </div>
        <div className="navigation">
          <h1 className="flex">
            <Home />
            <span>Home</span>
          </h1>
          <h1 className="flex">
            <Heart />
            <span>Favourites</span>
          </h1>
          <h1 className="flex">
            <TrendingUp />
            <span>Trending</span>
          </h1>
          <h1 className="flex">
            <Calendar />
            <span>Coming soon</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
