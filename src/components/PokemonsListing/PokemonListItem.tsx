import { Pokemon as PokemonInterface } from "pokenode-ts";
import styles from "./PokemonsListing.module.css";
import StarIcon from "../../assets/icons/star.png";
import StarFilledIcon from "../../assets/icons/filled-star.png";

export interface PokemonItemProps extends PokemonInterface {
  isFav: boolean;
  handleFavorite: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, name: string) => void;
  handleClick: (pokemon: PokemonInterface) => void;
}

export default function PokemonListItem(props: PokemonItemProps) {
  const { name, types, sprites, isFav, handleFavorite, handleClick } = props;
  const [primaryType] = types;

  return (
    <div
      className={`${styles.ContainerItem} type type--${primaryType.type.name}`}
      onClick={() => handleClick(props)}
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
        <button
          className={styles.FavButton}
          onClick={(event) => handleFavorite(event, name)}
        >
          <img src={isFav ? StarFilledIcon : StarIcon} alt="Fav Icon" />
        </button>
        <img
          className={styles.PokemonAvatar}
          src={sprites.other?.["official-artwork"].front_default!}
          alt={name}
        />
      </div>
    </div>
  );
}
