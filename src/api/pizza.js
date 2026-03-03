/* import axios from "axios";

export async function createPizzaOrder(payload) {
  const res = await axios.post("https://reqres.in/api/pizza", payload, {
    headers: {
      "x-api-key": "reqres-free-v1",
    },
  });

  return res.data;
} */

export async function createPizzaOrder(payload) {
  // Mock API response (ReqRes trial ended)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: Math.random().toString(36).substr(2, 9),
        ...payload,
        status: "success",
        timestamp: new Date().toISOString(),
      });
    }, 500);
  });
}
