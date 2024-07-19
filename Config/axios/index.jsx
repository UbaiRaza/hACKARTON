import axios from "axios";

export const signupApi = async (data) => {
  try {
    console.log("Data", data);
    const response = await axios.post("http://192.168.100.6:3001/signup", data);
    console.log("Res", response);
    return response;
  } catch (e) {
    console.log("Err", e);
    throw e; // Rethrow the error to be handled by the calling function
  }
};
