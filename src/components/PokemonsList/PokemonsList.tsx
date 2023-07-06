import styles from "./PokemonsList.module.css";
import PokemonsListItem, { PokemonsListItemProps } from "./PokemonsListItem";

interface PokemonsListProps {
  items: Array<PokemonsListItemProps>;
}

export default function PokemonsList({ items }: PokemonsListProps) {
  return (
    <div>
      <h1 className={styles.Title}>Pokédex</h1>
      <div className={styles.Container}>
        <div className={styles.Grid}>
          {items.map((pokemon) => (
            <PokemonsListItem {...pokemon} />
          ))}
        </div>
      </div>
    </div>
  );
}
