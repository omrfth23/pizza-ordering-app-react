import axios from "axios";

export async function createPizzaOrder(payload) {
  const res = await axios.post("https://reqres.in/api/pizza", payload, {
    headers: {
      "x-api-key": "reqres-free-v1",
    },
  });

  return res.data;
}
