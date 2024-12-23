import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import PokemonGrid from "./PokemonGrid";
import { fetchData } from "../Redux/action";

const PokemonCard = () => {
  const pokemon = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const url = `https://pivot-backend-gc91.onrender.com/pokemon`;
  // const fetchPokemonData = async () => {
  //   try {
  //     const response = await axios.get(url);
  //     setPokemonData(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    dispatch(fetchData(url));
    // fetchPokemonData();
  }, []);

  return <PokemonGrid pokemonData={pokemon.data} />;
};

export default PokemonCard;
