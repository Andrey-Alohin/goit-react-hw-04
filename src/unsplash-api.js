import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com/";
export const fetchImages = async (search, page) => {
  const response = await axios.get("search/photos", {
    params: {
      query: search,
      page: page,
      client_id: "_Zpx0ecEieGrEwbZ1-IrRyHOAYBd_lNuZTPjMAIM8nI",
      // orientation: "portrait",
    },
  });

  return response.data;
};
