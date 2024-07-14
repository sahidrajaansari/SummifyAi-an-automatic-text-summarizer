import mongoose from "mongoose";

const textSummarySchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    summaryLength: {
      type: Number,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const TextSummary = mongoose.model("TextSummary", textSummarySchema);

export default TextSummary;
