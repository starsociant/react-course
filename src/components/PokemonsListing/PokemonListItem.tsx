import { Pokemon as PokemonInterface } from "pokenode-ts";
import styles from "./PokemonsListing.module.css";
import star from "../../assets/icons/star.svg";

export interface PokemonItemProps extends PokemonInterface {
  isFav: boolean;
}

export default function PokemonListItem({
  name,
  types,
  sprites,
  isFav,
}: PokemonItemProps) {
  const [primaryType] = types;

  return (
    <div
      className={`${styles.ContainerItem} type type--${primaryType.type.name}`}
    >
      <div className={styles.Canvas}>
        <h4 className={styles.H4}>{name}</h4>
        <ul className={styles.TypesList}>
          {types.map(({ type }, idx) => (
            <li className={`type type--${type.name}`} key={idx}>
              {type.name}
            </li>
          ))}
        </ul>
        <button>
          {isFav && <img src={star} alt="" />}
          fav
        </button>
        <img
          src={sprites.other?.["official-artwork"].front_default!}
          alt={name}
        />
      </div>
    </div>
  );
}
