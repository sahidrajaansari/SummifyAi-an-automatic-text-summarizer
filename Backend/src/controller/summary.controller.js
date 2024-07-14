import axios from "axios";
import TextSummary from "../models/summary.model.js";
import { AIChatSession } from "./aiModel.js";

const countNumWords = (text) => {
  return text.split(" ").length;
};

const test = async (req, res) => {
  const response = await axios.get(`${process.env.MODEL_API_URL}/model/test/`);
  res.send({
    message: "Hello World",
  });
};

const generateSummary = async (req, res) => {
  const { text, maxSummaryLength, userId } = req.body;
  if (!text || !maxSummaryLength || !userId) {
    return res.status(400).send({
      error:
        "Please provide text, maxSummaryLength and userId in the request body.",
    });
  }
  console.log("Data is Valid");
  const data = { text, maxSummaryLength };

  try {
    console.log("Sending Request to Model API");
    const prompt = `Summarize the following text to a maximum length of ${maxSummaryLength}  words give the output in json format with key being summary for summary and a status key which would be 200 if the request is successful otherwise 400.:
${text}`;

    //For My Own Model
    // const response = await axios.post(
    //   `${process.env.MODEL_API_URL}/model/predict`,
    //   data
    // );

    const result = await AIChatSession.sendMessage(prompt);
    const response = JSON.parse(result.response.text());
    console.log("Response Received from Model API");

    const summary = response.summary;
    const summaryLength = countNumWords(summary);

    if (response.status === 200 && response.summary) {
      console.log("Summary is Getting Saved in DB");
      const summary = await TextSummary.create({
        userId,
        text,
        summary: response.summary,
        summaryLength,
      });
      console.log("Summary is Saved in DB");

      console.log("Sending Response to User");
      res.status(200).send({
        message: "Summary generated successfully.",
        summaryData: summary,
      });
    } else {
      // Handle cases where the response status is not 200 or no summary is provided
      throw new Error(
        "The response from the API did not contain a valid summary."
      );
    }
  } catch (error) {
    // Log the error for debugging
    console.error("Error generating summary:", error);
    res.status(500).send({
      error: "An error occurred while setting up the request.",
    });
  }
};

const getSummary = async (req, res) => {
  console.log("Request For Summaries is Received");
  const { userId } = req.query;
  if (!userId) {
    console.log("User ID is Missing");
    return res.status(400).send({
      error: "Please provide userId in the request params.",
    });
  }

  try {
    const summaries = await TextSummary.find({ userId });

    if (summaries.length === 0) {
      console.log("No Summaries Found for the Provided User ID");
      return res.status(404).send({
        error: "No summaries found for the provided userId.",
      });
    }

    // Remove userId from each summary
    const summariesWithoutUserId = summaries.map((summary) => {
      const { userId, ...rest } = summary.toObject(); // Convert to plain object and exclude userId
      return rest;
    });

    console.log("Summaries Retrieved Successfully");
    res.status(200).send({
      message: "Summaries retrieved successfully.",
      summaryData: summariesWithoutUserId,
    });
  } catch (error) {
    console.error("Error retrieving summaries:", error);

    res.status(500).send({
      error: "An error occurred while retrieving the summaries.",
    });
  }
};

const removeSummary = async (req, res) => {
  console.log("Request For Deleting Summaries is Received");

  const { summaryId } = req.query;
  if (!summaryId) {
    console.log("Summary ID is Missing");
    return res.status(400).send({
      error: "Please provide userId in the request params.",
    });
  }
  try {
    const summaries = await TextSummary.findByIdAndDelete(summaryId);

    if (summaries.deletedCount === 0) {
      console.log("No Summaries Found for the Provided Summary ID");
      return res.status(404).send({
        error: "No summaries found for the provided userId.",
      });
    }

    console.log("Summaries Deleted Successfully");
    res.status(200).send({
      message: "Summaries deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting summaries:", error);
    res.status(500).send({
      error: "An error occurred while deleting the summaries.",
    });
  }
};

export { test, generateSummary, getSummary, removeSummary };
