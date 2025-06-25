import logo from "../../assets/logo.svg";
import { Content, HeaderConteiner } from "./styles";

export function Header() {
  return (
    <HeaderConteiner>
      <Content>
        <img src={logo} alt="Dt Money" />
        <button>Nova transação</button>
      </Content>
    </HeaderConteiner>
  );
}
