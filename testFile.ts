import axios from "axios";

const data = {
  name: "John",
  age: 30,
};

axios
  .post("https://api.example.com/endpoint", data)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
