import React from "react";

function Navbar() {
  // function clicked(event) {
  //   console.log(event.target.className);
  // }
  return (
    <div className="md:col-span-1 md:flex md:justify-end bg-white ">
      <nav>
        <div className="flex justify-between items-center">
          <h1 className="font-bold uppercase p-4 border-b border-gray-100">
            <a href="/">Foodology</a>
          </h1>
          <div
            className="px-4 cursor-pointer md:hidden"
            id="burger"
            onClick={(event) => console.log(event.target.className)}
          >
            {/* ------------------Get the classnames of this clicked div----------------- */}
            <svg
              className="w-6"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
        <ul className="hidden md:block" id="menu">
          <li className="list">
            <a
              href="/"
              className="md:flex md:items-center md:justify-end px-4 sm:border-r-4 sm:border-red-300 "
            >
              <span className="pr-3">Home</span>
              <span>
                <svg
                  className="h-6 "
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </span>
            </a>
          </li>
          <li className="list">
            <a
              href="/"
              className="md:flex md:items-center px-4 md:justify-end sm:border-r-4 sm:border-white"
            >
              <span className="pr-3">About</span>
              <span>
                <svg
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
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </a>
          </li>
          <li className="list">
            <a
              href="/"
              className="md:flex md:items-center px-4 md:justify-end sm:border-r-4 sm:border-white"
            >
              <span className="pr-3">Contact</span>
              <span>
                <svg
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
