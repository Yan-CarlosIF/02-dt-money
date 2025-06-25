import ReactModal from "react-modal";
import {
  NewTransactionModalConteiner,
  TransactionTypeConteiner,
} from "./styles";
import XIcon from "../../assets/x.svg";
import ArrowUp from "../../assets/arrow_up.svg";
import ArrowDown from "../../assets/arrow_down.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={XIcon} alt="Fechar modal" />
      </button>
      <NewTransactionModalConteiner>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />

        <TransactionTypeConteiner>
          <button type="button">
            <img src={ArrowUp} alt="Icone de Entrada" />
            <span>Entrada</span>
          </button>
          <button type="button">
            <img src={ArrowDown} alt="Icone de Saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeConteiner>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </NewTransactionModalConteiner>
    </ReactModal>
  );
}
