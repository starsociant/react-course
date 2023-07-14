import { useEffect, useState } from "react";
import { Pokemon as PokemonInterface } from "pokenode-ts";
import { PokemonModal, Filter, Search } from "..";
import PokemonListItem from "./PokemonListItem";
import styles from "./PokemonsListing.module.css";
import { useLocalStorage } from "../../hooks";

interface PokemonsListingProps {
  items: PokemonInterface[];
}

// pokemon -> tipos[] -> tipo -> nome
const extractTypesFromPokemonList = (
  pokemons: PokemonInterface[]
): string[] => {
  const pokemonTypes = pokemons.map(({ types }) => types).flat();
  return [...new Set(pokemonTypes.map(({ type }) => type.name))];
};

export default function PokemonsListing({ items = [] }: PokemonsListingProps) {
  const types = extractTypesFromPokemonList(items);
  const [pokemons, setPokemons] = useState<PokemonInterface[]>(items);
  const [search, setSearch] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonInterface>();
  const [isPokemonModalOpen, setIsPokemonModalOpen] = useState(false);
  const [favorites, setFavorites] = useLocalStorage('favorites');

  useEffect(() => {
    setPokemons(items);
  }, [items]);

  useEffect(() => {
    if (!search) {
      return;
    }

    setPokemons(pokemons.filter((pokemon) => pokemon.name.includes(search)));
  }, [pokemons, search]);

  const filter = (type: string) => {
    if (!type) {
      setPokemons(items);
      return;
    }

    setPokemons(
      items.filter((pokemon) =>
        pokemon.types.map(({ type }) => type.name).includes(type)
      )
    );
  };

  const handleFavorite = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, name: string) => {
    e.stopPropagation();

    const unix = new Set(favorites);
    unix.add(name);
    window.localStorage.setItem("favorites", JSON.stringify(Array.from(unix)));
    setFavorites(Array.from(unix));
  };

  const viewPokemon = (pokemon: PokemonInterface) => {
    setSelectedPokemon(pokemon);
    setIsPokemonModalOpen(true);
  };

  return (
    <section>
      <h1 className={`font-pokemon ${styles.H1}`}>Pokédex</h1>
      <div>
        <Filter items={types} handleClick={filter} />
        <Search handleChange={setSearch} />
      </div>
      <div className={styles.Container}>
        {pokemons.map((pokemon, i) => {
          const isFav = (favorites || []).includes(pokemon.name);
          return (
            <PokemonListItem
              {...pokemon}
              key={`pokemonslist-item-${i}`}
              isFav={isFav}
              handleFavorite={handleFavorite}
              handleClick={viewPokemon}
            />
          );
        })}
      </div>
      <PokemonModal
        name={selectedPokemon?.name || ""}
        isOpen={isPokemonModalOpen}
        handleClose={() => setIsPokemonModalOpen(false)}
      />
    </section>
  );
}
