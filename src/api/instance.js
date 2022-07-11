import axios from "axios";

const getInstance =()=>{
    const instance = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });
    const headers = {
        "Content-Type": "application/json",
        Accept: "application/vnd.github.v3+json",
        Authorization: `token ${process.env.REACT_APP_GIT_TOKEN}`,
    };
    instance.nterceptors.request.use((req) => {
        Object.entries(headers).forEach(([key, value]) => {
          req.headers[key] = value;
        });
        return req;
      });
      return instance;
};
export default getInstance;