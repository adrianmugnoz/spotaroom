import axios from "axios"
const API_URL = 'http://localhost:4000/api'
const get = async (url: string, options?: object) => {
  try {
    const targetUrl = API_URL + url;
    const response = await axios.get(targetUrl);
    return response.data;
  } catch(error) {
    console.log("Error on get", url);
  }
  return axios
}

export const api = {
  get
}