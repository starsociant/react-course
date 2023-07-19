import { PokemonClient, Type } from "pokenode-ts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TypePage() {
  const { name } = useParams();
  const [pokemonType, setPokemonType] = useState<Type>();
  useEffect(() => {
    const api = new PokemonClient();
    if (!name) return;

    api.getTypeByName(name).then((response) => {
      setPokemonType(response);
    });
  }, [name]);
  return (
    <center>
      {name} - {pokemonType?.id}
    </center>
  );
}
