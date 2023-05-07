import { Movies } from "./types";

export const basicFetch = async <returnType>(
  endpoint: string
): Promise<returnType> => {
  const response = await fetch(endpoint);

  console.log(response);
  if (!response.ok) throw new Error("Error!");

  const data = await response.json();

  return data;
};

//fetch functions
export const fetchMovies = async (search = "", page = 1): Promise<Movies> => {
  //to access the entire route created in nextjs
  return await basicFetch<Movies>(`/api/movies?search=${search}&page=${page}`);
};
