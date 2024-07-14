import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ThemeIcon from "./ThemeIcon";
import { Button } from "../ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";
import { FaMoon, FaSun } from "react-icons/fa";

function NavBar() {
  const navigate = useNavigate();
  const { user, isLoaded, isSignedIn } = useUser();

  return (
    <div className="flex justify-between items-center px-5 py-3 bg-[#ffffff] text-[#000000] dark:bg-[#121212] dark:text-[#ffffff]">
      <div className="lg:w-[25%] w-[50%] flex justify-center items-center">
        <h1 className="font-platypi text-2xl text-center font-extrabold select-none">
          SummifyAI
        </h1>
      </div>
      <div className="px-10 lg:w-[40%] w-[0%] flex justify-evenly items-center font-platypi lg:flex hidden">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-base ${
              isActive
                ? "text-[#fc6036]"
                : "text-[#000000] dark:text-[#d6e3fe]"
            } hover:text-[#fc6036] hover:underline dark:hover:text-[#fc6036] dark:hover:underline`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/summary"
          className={({ isActive }) =>
            `text-base ${
              isActive
                ? "text-[#fc6036]"
                : "text-[#000000] dark:text-[#d6e3fe]"
            } hover:text-[#fc6036] hover:underline dark:hover:text-[#fc6036] dark:hover:underline`
          }
        >
          Generate Summary
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-base ${
              isActive
                ? "text-[#fc6036]"
                : "text-[#000000] dark:text-[#d6e3fe]"
            } hover:text-[#fc6036] hover:underline dark:hover:text-[#fc6036] dark:hover:underline`
          }
        >
          Contact
        </NavLink>
      </div>
      <div className="lg:w-[25%] w-[50%] flex justify-evenly items-center gap-2">
        {!isSignedIn ? (
          <button
            onClick={() => navigate("/auth")}
            className="bg-[#fc6036] text-[#ffffff] rounded-full p-3 py-2 font-semibold hover:bg-[#e55b2b] dark:bg-[#fc6036] dark:text-[#ffffff] dark:hover:bg-[#e55b2b] text-xs"
          >
            Get Started
          </button>
        ) : (
          <div className="flex items-center gap-4 sm:gap-2">
            <Button
              variant="outline"
              onClick={() => {
                navigate("/dashboard");
              }}
              className="text-[#fc6036] border-[#fc6036] hover:bg-[#fc6036] hover:text-[#ffffff] dark:text-[#fc6036] dark:border-[#fc6036] dark:hover:bg-[#fc6036] dark:hover:text-[#ffffff]"
            >
              Dashboard
            </Button>
            <UserButton />
          </div>
        )}
        <ThemeIcon />
      </div>
    </div>
  );
}

export default NavBar;
