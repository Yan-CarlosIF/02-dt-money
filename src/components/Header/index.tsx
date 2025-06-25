import logo from "../../assets/logo.svg";
import { Content, HeaderConteiner } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <HeaderConteiner>
      <Content>
        <img src={logo} alt="Dt Money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </HeaderConteiner>
  );
}
