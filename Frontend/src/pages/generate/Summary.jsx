import React, { useState, useEffect } from "react";
import { Textarea } from "../../Components/ui/textarea";
import { Button } from "../../Components/ui/button";
import { generateSummary } from "@/Service/api";
import { TbLoaderQuarter, TbArrowRight } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

function Summary() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [sliderValue, setSliderValue] = useState(25);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user, isLoaded, isSignedIn } = useUser();
  const [predictedSummary, setPredictedSummary] = useState("");

  useEffect(() => {
    console.log("User", user);
  }, []);

  useEffect(() => {
    if (!isSignedIn) {
      navigate("/auth");
    }
  }, [isSignedIn, navigate]);

  const summaryLengthAndName = {
    25: "XS",
    50: "SM",
    75: "MD",
    100: "LG",
  };

  useEffect(() => {
    setWordCount(text?.split(" ").length);
  }, [text]);

  const handleTextChange = (e) => {
    setLoading(false);
    setPredictedSummary("");
    if (wordCount > 512) {
      console.log("Word Count Exceeded");
      setLoading(true);
    }
    setText(e.target.value);
  };

  const handleSummaryGeneration = async () => {
    console.log("Generating Summary");
    const SummaryLength = wordCount * (sliderValue / 100);
    setPredictedSummary("");
    setLoading(true);
    try {
      await generateSummary({
        text,
        maxSummaryLength: SummaryLength,
        userId: user.id,
      })
        .then((res) => {
          console.log("Response From Api in summary", res);
          const genSummary = res.summaryData.summary.split(".");
          const filteredSummary = genSummary.filter(
            (sentence, index) => index !== genSummary.length - 1
          );
          setPredictedSummary(filteredSummary.join(".") + " .");
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center bg-[#f5f5f5] text-[#333333] dark:bg-[#1e1e1e] dark:text-[#e0e0e0]">
      <div className="grid lg:grid-cols-2 p-5 gap-5 w-11/12 lg:w-4/5 h-5/6 lg:h-4/5">
        <div className="w-full h-full col-span-2 lg:col-span-1 flex flex-col bg-[#ffffff] dark:bg-[#2d2d2d] border border-[#bf4408] dark:border-[#e65103] rounded-lg p-6 shadow-lg">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-5 space-y-4 lg:space-y-0 lg:space-x-4">
            <h3 className="text-xl font-semibold text-[#bf4408] dark:text-[#e65103]">
              Summary Size
            </h3>
            <div className="flex-grow">
              <input
                type="range"
                value={sliderValue}
                min={25}
                max={100}
                step={25}
                className="h-2 w-full bg-gradient-to-r from-[#bf4408] to-[#e65103] rounded-full outline-none appearance-none"
                onChange={(e) => setSliderValue(parseInt(e.target.value))}
              />
            </div>
            <div className="text-[#bf4408] dark:text-[#e65103] font-normal text-sm">
              {summaryLengthAndName[sliderValue]}
            </div>
          </div>
          <Textarea
            className="w-full flex-grow mb-4 border border-[#bf4408] dark:border-[#e65103] focus:border-[#e65103] dark:focus:border-[#bf4408] rounded-lg p-4 bg-[#ffffff] dark:bg-[#2d2d2d] text-[#333333] dark:text-[#e0e0e0]"
            value={text}
            onChange={(e) => handleTextChange(e)}
          />
          <div className="flex justify-between items-center">
            <Button
              onClick={handleSummaryGeneration}
              disabled={loading}
              className="flex items-center justify-center bg-[#bf4408] text-[#ffffff] hover:bg-[#e65103] dark:bg-[#e65103] dark:hover:bg-[#bf4408] text-sm transition duration-300 ease-in-out rounded-lg px-4 py-2"
            >
              {loading ? (
                <TbLoaderQuarter className="animate-spin" />
              ) : (
                <span className="flex items-center">
                  Generate Summary <TbArrowRight className="ml-2" />
                </span>
              )}
            </Button>
            <div className="text-right text-[#bf4408] dark:text-[#e65103] font-medium">
              Word Count: {wordCount}
            </div>
          </div>
        </div>
        <div className="w-full h-full col-span-2 lg:col-span-1 flex flex-col bg-[#ffffff] dark:bg-[#2d2d2d] border border-[#bf4408] dark:border-[#e65103] rounded-lg p-6 shadow-lg">
          <div className="text-center mb-5">
            <h3 className="text-xl font-semibold text-[#bf4408] dark:text-[#e65103]">
              Generated Summary
            </h3>
          </div>
          <Textarea
            placeholder="Generated Summary....."
            className="w-full flex-grow outline-none border border-[#bf4408] dark:border-[#e65103] rounded-lg p-4 bg-[#fbf1eb] dark:bg-[#2d2d2d] text-[#333333] dark:text-[#e0e0e0]"
            value={predictedSummary}
            readOnly
          />
        </div>
      </div>
    </section>
  );
}

export default Summary;
