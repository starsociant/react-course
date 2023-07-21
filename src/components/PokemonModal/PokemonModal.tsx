import { Pokemon as PokemonInterface } from "pokenode-ts";
import Modal from "react-modal";

export interface PokemonModalProps {
  pokemon: PokemonInterface;
  isOpen: boolean;
  handleClose: () => void;
}

export default function PokemonModal({
  pokemon,
  handleClose,
  isOpen = false,
}: PokemonModalProps) {
  return (
    <div>
      <Modal
        style={{
          overlay: {
            zIndex: 9999,
          },
        }}
        isOpen={isOpen}
        contentLabel="Pokemon Modal"
      >
        <h2>{pokemon.name}</h2>
        <ul>
          {pokemon.types.map(({ type }, idx) => (
            <li className={`type type--${type.name}`} key={idx}>
              {type.name}
            </li>
          ))}
        </ul>
        <img
          src={pokemon.sprites.other?.["official-artwork"].front_default!}
          alt={pokemon.name}
        />
        <button onClick={handleClose}>close</button>
      </Modal>
    </div>
  );
}
