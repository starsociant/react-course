import styles from "./PokemonsListing.module.css";

export interface PokemonInterface {
  number: number;
  name: string;
  image: string;
  types: string[];
}

export default function PokemonListItem({ name, image, types }: PokemonInterface) {
  const [primaryType] = types;
  return (
    <div className={`${styles.ContainerItem} type type--${primaryType}`}>
      <div className={styles.Canvas}>
        <h4 className={styles.H4}>{name}</h4>
        <ul className={styles.TypesList}>
          {types.map((type, idx) => (
            <li className={`type type--${type}`} key={idx}>{type}</li>
          ))}
        </ul>
        <img src={image} alt={name} />
      </div>
    </div>
  );
}
