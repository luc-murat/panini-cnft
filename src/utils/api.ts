import axios from "axios";

const createApiInstance = (options = {}) => {
  let treumApiKey = process.env.REACT_APP_CNFT_API_KEY;
  if (treumApiKey === undefined) {
    treumApiKey = "set treum api key !";
  }

  return axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      "Treum-Api-Key": treumApiKey,
    },
  });
};

const apiInstance = createApiInstance();

export default apiInstance;
