import { Filter, Search } from "..";
import PokemonListItem, { PokemonInterface } from "./PokemonListItem";
import styles from "./PokemonsListing.module.css";

interface PokemonsListingProps {
  items: PokemonInterface[];
}

export default function PokemonsListing({ items = [] }: PokemonsListingProps) {
  const types = [...new Set(items.map((i) => i.types).flat())];
  return (
    <section>
      <h1 className={`font-pokemon ${styles.H1}`}>Pokédex</h1>
      <div>
        <Filter items={types} />
        <Search />
      </div>
      <div className={styles.Container}>
        {items.map((pokemon, i) => (
          <PokemonListItem {...pokemon} key={`pokemonslist-item-${i}`} />
        ))}
      </div>
    </section>
  );
}
