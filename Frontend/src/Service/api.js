import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_MODEL_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
const testData = () => {
  try {
    api.get("/summary/test").then((res) => {
      console.log("Response From Api", res);
      return res.data;
    });
  } catch (error) {
    console.error(error);
  }
};

const generateSummary = async (data) => {
  const res = await api.post("/summary/generate", data);
  console.log("Response From Api in api", res);
  return res.data;
};

const getAllTheSummary = async (userId) => {
  const res = await api.get(`/summary/get?userId=${userId}`);
  console.log("Response From Api in api", res);
  return res;
};

const deleteSummary = async (id) => {
  const res = await api.delete(`/summary/remove?summaryId=${id}`);
  console.log("Response From Api in api", res);
  return res;
};

export { testData, generateSummary, getAllTheSummary,deleteSummary };
