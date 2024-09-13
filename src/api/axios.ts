import axios from "axios";

const baseURL = "https://api.edamam.com/api/recipes/v2";

function fetchData(url:string) {
  const instance = axios.create();
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return instance.get(url);
  } else {
    instance.defaults.baseURL = baseURL;
    return instance.get(url);
  }
}

export default fetchData;
