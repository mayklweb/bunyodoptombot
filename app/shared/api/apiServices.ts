import Axios from "./index";

export const getProducts = async () => {
  const res = await Axios.get("/products");
  return res.data;
};

export const getCategories = async () => {
  const { data } = await Axios.get("/categories");
  return data;
};

export const getProductById = async (id: number) => {
  const { data } = await Axios.get(`/products`);
  const item = data.filter((item: { id: number }) => item.id === id);
  return item;
};
