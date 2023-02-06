import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class HYRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return err;
      }
    );
  }

  request(config) {
    return this.instance.request(config);
  }
  get(config) {
    return this.request({ ...config, methed: "get" });
  }
  post(config) {
    return this.request({ ...config, methed: "post" });
  }
}

let Request = new HYRequest(BASE_URL, TIMEOUT);

export default Request;
