import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { FaTimes, FaHome, FaPlus } from "react-icons/fa"; // Added FaHome and FaPlus for icons
import { getAllTheSummary, deleteSummary } from "@/Service/api.js";
import { useNavigate } from "react-router-dom";
import { toast } from "@/Components/ui/use-toast";
import { NavLink } from "react-router-dom";

function Dashboard() {
  const { isSignedIn, user } = useUser();
  const [summaryData, setSummaryData] = useState([]);
  const [error, setError] = useState(null);
  const [deleteError, setDeleteError] = useState(null);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await getAllTheSummary(user.id);
      setSummaryData(response.data.summaryData);
      setError(null);
    } catch (err) {
      setError("Failed to fetch summaries. Please try again.");
      if (err.response && err.response.status === 404) {
        setSummaryData([]);
        setError("No summaries found.");
      } else {
        toast({
          variant: "destructive",
          description: "Failed to fetch summaries. Please try again.",
        });
        console.error(err);
      }
    }
  };

  useEffect(() => {
    if (!isSignedIn) {
      navigate("/auth");
    } else {
      toast({
        className: "bg-orange-500 dark:text-gray-800 text-white",
        description: "Welcome to your dashboard!",
      });
      fetchData();
    }
  }, [isSignedIn]);

  const handleDelete = async (summaryId) => {
    try {
      console.log(`Deleting item with id: ${summaryId}`);
      const response = await deleteSummary(summaryId);
      if (response.status === 200) {
        fetchData();
        setDeleteError(null);
        toast({
          description: "Summary deleted successfully.",
        });
      } else {
        throw new Error("Failed to delete summary.");
      }
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setDeleteError("Summary not found.");
        toast({
          variant: "destructive",
          description: "Summary not found.",
        });
      } else {
        setDeleteError("Failed to delete summary. Please try again.");
        toast({
          variant: "destructive",
          description: "Failed to delete summary. Please try again.",
        });
      }
      console.error(err);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center bg-[#ffffff] text-[#000000] dark:bg-[#121212] dark:text-[#ffffff] min-h-screen p-6 lg:p-12">
      <div className="flex justify-between w-full max-w-4xl mb-8">
        <NavLink
          to="/"
          className="flex items-center gap-2 bg-[#bf4408] dark:bg-[#e65103] text-white font-bold py-2 px-4 rounded transition-colors duration-200 ease-in-out hover:bg-[#e65103] dark:hover:bg-[#bf4408]"
        >
          <FaHome size={20} />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/summary"
          className="flex items-center gap-2 bg-[#bf4408] dark:bg-[#e65103] text-white font-bold py-2 px-4 rounded transition-colors duration-200 ease-in-out hover:bg-[#e65103] dark:hover:bg-[#bf4408]"
        >
          <FaPlus size={20} />
          <span>Generate Summary</span>
        </NavLink>
      </div>
      <div className="text-4xl font-bold mb-8 text-[#bf4408] dark:text-[#e65103]">
        Dashboard
      </div>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {deleteError && <div className="text-red-500 mb-4">{deleteError}</div>}
      <div className="w-full max-w-4xl">
        {summaryData.map((summary) => (
          <div
            key={summary._id}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6 relative border border-[#bf4408] dark:border-[#e65103] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:border-[#e65103] dark:hover:border-[#bf4408] dark:hover:shadow-2xl"
          >
            <button
              onClick={() => handleDelete(summary._id)}
              className="absolute top-4 right-4 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors duration-200 ease-in-out"
            >
              <FaTimes size={20} />
            </button>
            <div className="mb-4">
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                <span className="text-[#bf4408] dark:text-[#e65103]">
                  Plain Text:{" "}
                </span>
                <span className="text-lg font-medium">{summary.text}</span>
              </div>
            </div>
            <div className="mb-4">
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                <span className="text-[#bf4408] dark:text-[#e65103]">
                  Generated Text:{" "}
                </span>
                <p className="text-lg">{summary.summary}</p>
              </div>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <span className="text-[#bf4408] dark:text-[#e65103]">Size: </span>
              {summary.summaryLength} Words
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Dashboard;
