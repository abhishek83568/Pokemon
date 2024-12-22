import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import PokemonGrid from "./PokemonGrid";
import { fetchData } from "../Redux/action";

const PokemonCard = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const pokemon = useSelector((state) => state.pokemon);

  const dispatch = useDispatch();
  const url = `http://localhost:8977/pokemon`;

  useEffect(() => {
    dispatch(fetchData(url));
  }, []);

  return <PokemonGrid pokemonData={pokemon.data} />;
};

export default PokemonCard;
