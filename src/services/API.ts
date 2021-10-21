import axios from "axios";
import { PokemonTypesResponse } from "../types/API";

const BASE_URL = "https://pokeapi.co/api/v2";

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchTypes = async () => {
  const response = await api.get<PokemonTypesResponse>("/type");
  console.log(response);
  return response.data.results;
};
