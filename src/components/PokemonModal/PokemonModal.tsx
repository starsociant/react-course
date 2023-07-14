import { Pokemon as PokemonInterface } from "pokenode-ts";
import Modal from "react-modal";

export interface PokemonModalProps extends Pick<PokemonInterface, "name"> {
  isOpen: boolean;
  handleClose: () => void;
}

export default function PokemonModal({
  name,
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
        <h2>{name}</h2>
        <button onClick={handleClose}>close</button>
      </Modal>
    </div>
  );
}
