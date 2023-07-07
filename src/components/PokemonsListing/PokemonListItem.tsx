import styles from "./PokemonsListing.module.css";

export interface PokemonInterface {
  name: string;
  types: string[];
}

export default function PokemonListItem({ name, types }: PokemonInterface) {
  return (
    <div className={styles.ContainerItem}>
      <div>{name}</div>
      <ul>
        {types.map((type, idx) => (
          <li key={idx}>{type}</li>
        ))}
      </ul>
    </div>
  );
}
