import axios from "axios";

export const fetchImg = async (query, perPage, page) => {
  const res = await axios.get(`https://api.unsplash.com/search/photos/`, {
    params: {
      client_id: "BkR8bk8Vut_m1Vc3086qjXe09sJ1Uq6Elp7KD4BPom4",
      query,
      per_page: perPage,
      page,
    },
  });

  return res.data;
};
