import React from "react";
import { latest, popular } from "./latest";
import "./Main.css";

function Main() {
  return (
    <div className="px-8 py-6 sm:px-12 md:px-16 md:grid md:col-span-2">
      <div className="text-red-300 flex justify-center md:justify-end ">
        <a href="/" className="btn md:border-red-300 md:border-2 hover">
          Login
        </a>
        <a href="/" className="btn md:border-red-300 md:border-2 ml-3 hover">
          Sign Up
        </a>
      </div>
      <header>
        <h2 className="text-gray-700 text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
          Recipes
        </h2>
        <h3 className="text-sm sm:text-xl md:text-2xl font-semibold ">
          For Foodies
        </h3>
      </header>
      <div>
        <h4 className="font-bold mt-12 pb-2 border-b  border-gray-200">
          Latest Recipes
        </h4>

        <div className="mt-8  md:grid md:grid-cols-2 md:gap-10 xl:grid xl:grid-cols-3">
          {/* ---------------Latest recipes cards-------------- */}
          {latest.map((item, index) => {
            return (
              <div className="card" key={index}>
                <img
                  src={item.img}
                  className="w-full h-32 sm:h-48 object-cover"
                  alt="food"
                />
                <div className="p-4">
                  <span className="font-bold">{item.title}</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe by {item.cook}
                  </span>
                </div>
                <div className="badge flex justify-center items-center">
                  <span>
                    <svg
                      className="h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span className="pl-1 font-normal text-sm">{item.time}</span>
                </div>
              </div>
            );
          })}

          {/* ---------------Latest recipes cards ends here-------------- */}
        </div>

        <h4 className="mt-12 pb-2 font-bold  border-b border-gray-200">
          Most Popular
        </h4>
        <div className="mt-8 xl:grid xl:grid-cols-3 xl:gap-10 ">
          {/* ---------------Most popular cards-------------- */}
          {popular.map((item) => {
            return (
              <div className="card">
                <img
                  src={item.img}
                  className="w-full h-32 sm:h-48 object-cover"
                  alt="food"
                />
                <div className="p-4">
                  <span className="font-bold">{item.title}</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe by {item.cook}
                  </span>
                </div>
              </div>
            );
          })}
          {/* ---------------Most popular cards ends here-------------- */}
        </div>
        <div>
          <div className="btn flex justify-center">
            <span className="bg-gray-400 rounded-full text-gray-100 px-3 py-2 hover">
              Load More
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
