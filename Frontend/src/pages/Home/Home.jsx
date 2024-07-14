import React from "react";
import { useUser } from "@clerk/clerk-react";
import Summary from "../generate/Summary";
import { useNavigate } from "react-router-dom";

function Home() {
  const { user, isLoaded, isSignedIn } = useUser();
  const navigate = useNavigate();

  return (
    <>
      <section className="w-full h-[80%] flex flex-col justify-center items-center bg-[#fdfdfd] text-[#333333] dark:bg-[#121212] dark:text-[#e0e0e0]">
        <div className="flex flex-col justify-center items-center my-3">
          <div className="text-center items-center w-[80%] text-4xl font-platypi leading-tight font-extrabold text-[#000000] dark:text-[#ffffff]">
            <h2>SummifyAI: An Automatic Text Summarizer</h2>
          </div>
          <div className="text-base mt-5 text-[#333333] dark:text-[#e0e0e0]">
            <p>Your go-to text summarization tool.</p>
          </div>
          <div className="mt-5 w-[80%] flex justify-between px-5">
            <button className="bg-[#bf4408] text-[#ffffff] rounded-full p-3 py-2 font-semibold hover:bg-[#e65103] hover:text-[#ffffff] dark:hover:bg-[#e65103] dark:hover:text-[#ffffff] text-xs transition duration-300 ease-in-out">
              Learn More
            </button>
            <button
              className="group flex items-center justify-center text-[#bf4408] dark:text-[#e65103] hover:text-[#e65103] dark:hover:text-[#bf4408] text-xs transition duration-300 ease-in-out"
              onClick={() => {
                navigate("/summary");
              }}
            >
              Try It Now
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </section>
      {isSignedIn && <Summary />}
    </>
  );
}

export default Home;
