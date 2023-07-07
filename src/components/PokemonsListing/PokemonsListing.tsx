import PokemonListItem, { PokemonInterface } from "./PokemonListItem";
import styles from "./PokemonsListing.module.css";

interface PokemonsListingProps {
  items: PokemonInterface[];
}

export default function PokemonsListing({ items = [] }: PokemonsListingProps) {
  return (
    <section>
      <h1 className={`font-pokemon ${styles.H1}`}>Pokédex</h1>
      <div className={styles.Container}>
        {items.map((pokemon, i) => (
          <PokemonListItem {...pokemon} key={`pokemonslist-item-${i}`} />
        ))}
      </div>
    </section>
  );
}
