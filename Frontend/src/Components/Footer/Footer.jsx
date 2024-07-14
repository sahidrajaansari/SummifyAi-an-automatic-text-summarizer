import React from "react";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex items-center flex-col bg-[#d6e3fe] text-[#000000] dark:bg-[#2a2a2a] dark:text-[#ffffff] py-5 select-none">
      <h2 className="text-lg font-bold mb-2">SummifyAI: An Automatic Text Summarizer</h2>
      <hr className="border-1 w-[90%] border-[#000000] dark:border-[#ffffff] my-2" />
      <div className="flex w-full justify-between px-10 text-lg">
        <div className="year">
          <p>2024</p>
        </div>
        <div className="px-5 flex gap-4">
          <a href="#" className="text-[#fc6036] hover:text-[#e55b2b] dark:text-[#fc6036] dark:hover:text-[#e55b2b]">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="#" className="text-[#fc6036] hover:text-[#e55b2b] dark:text-[#fc6036] dark:hover:text-[#e55b2b]">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="mailto:contact@summifyai.com" className="text-[#fc6036] hover:text-[#e55b2b] dark:text-[#fc6036] dark:hover:text-[#e55b2b]">
            <FaEnvelope className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
