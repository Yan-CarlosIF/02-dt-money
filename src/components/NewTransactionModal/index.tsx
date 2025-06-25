import ReactModal from "react-modal";
import {
  NewTransactionModalConteiner,
  RadioBox,
  TransactionTypeConteiner,
} from "./styles";
import XIcon from "../../assets/x.svg";
import ArrowUp from "../../assets/arrow_up.svg";
import ArrowDown from "../../assets/arrow_down.svg";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const newTransactionSchema = z.object({
  title: z.string().nonempty(),
  amount: z.number().min(1),
  type: z.enum(["deposit", "withdraw"]),
  category: z.string().nonempty(),
});

type NewTransactionType = z.infer<typeof newTransactionSchema>;

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { handleSubmit, register, control, watch } =
    useForm<NewTransactionType>({
      defaultValues: {
        amount: 0,
        category: "",
        title: "",
        type: "deposit",
      },
      resolver: zodResolver(newTransactionSchema),
    });

  const type = watch("type");

  async function handleCreateNewTransaction(data: NewTransactionType) {
    await api.post("/transactions", data);
  }

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
      <NewTransactionModalConteiner
        onSubmit={handleSubmit(handleCreateNewTransaction)}
      >
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" {...register("title")} />
        <input
          type="number"
          placeholder="Valor"
          {...register("amount", { valueAsNumber: true })}
        />

        <Controller
          control={control}
          name="type"
          render={({ field }) => (
            <TransactionTypeConteiner>
              <RadioBox
                isActive={type === "deposit"}
                activeColor="green"
                type="button"
                onClick={() => field.onChange("deposit")}
              >
                <img src={ArrowUp} alt="Icone de Entrada" />
                <span>Entrada</span>
              </RadioBox>
              <RadioBox
                isActive={type === "withdraw"}
                activeColor="red"
                type="button"
                onClick={() => field.onChange("withdraw")}
              >
                <img src={ArrowDown} alt="Icone de Saída" />
                <span>Saída</span>
              </RadioBox>
            </TransactionTypeConteiner>
          )}
        />

        <input placeholder="Categoria" {...register("category")} />

        <button type="submit">Cadastrar</button>
      </NewTransactionModalConteiner>
    </ReactModal>
  );
}
