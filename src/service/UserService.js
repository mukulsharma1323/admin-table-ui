// Mukul Sharma MukulSharma1323@gmail.com

import axios from "axios";

export default class ProductService {
  getUsers() {
    return axios
      .get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
      .then((res) => res.data);
  }
}
