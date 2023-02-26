import axios from "axios";

export const getAllShoes = async () => {
  try {
    const res = await axios.get(
      "https://63f8b1d01dc21d5465c4e1f2.mockapi.io/api/shoes/"
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getShoeById = async (id) => {
  try {
    const res = await axios.get(
      `https://63f8b1d01dc21d5465c4e1f2.mockapi.io/api/shoes/` + id
    );
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const addShoe = async ( body) => {
    try {
      const res = await axios.post(
        `https://63f8b1d01dc21d5465c4e1f2.mockapi.io/api/shoes/`,
        body
      );
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
export const updateShoeById = async (id, body) => {
  try {
    const res = await axios.put(
      `https://63f8b1d01dc21d5465c4e1f2.mockapi.io/api/shoes/${id}`,
      body
    );
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteShoeById = async (id) => {
    try {
      const res = await axios.delete(
        `https://63f8b1d01dc21d5465c4e1f2.mockapi.io/api/shoes/${id}`
      );
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };