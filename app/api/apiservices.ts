import Axios from "../index";

export const getProducts = async () => {
  const res = await Axios.get("/products");
  return res.data;
};

export const getCategories = async () => {
  const { data } = await Axios.get("/categories");
  return data;
};
