import { Pokemon as PokemonInterface } from "pokenode-ts";
import { useContext } from "react";
import Modal from "react-modal";
import { AuthContext } from "../../context";

export interface PokemonModalProps extends Pick<PokemonInterface, "name"> {
  isOpen: boolean;
  handleClose: () => void;
}

export default function PokemonModal({
  name,
  handleClose,
  isOpen = false,
}: PokemonModalProps) {
  const authContext = useContext(AuthContext);

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
        {authContext?.user?.name ? `Olá, ${authContext?.user?.name}!` : null}
      </Modal>
    </div>
  );
}
