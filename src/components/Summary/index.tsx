import { SummaryConteiner } from "./styles";
import ArrowUp from "../../assets/arrow_up.svg";
import ArrowDown from "../../assets/arrow_down.svg";
import Total from "../../assets/money.svg";

export function Summary() {
  return (
    <SummaryConteiner>
      <div>
        <header>
          <p>Entradas</p>
          <img src={ArrowUp} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={ArrowDown} alt="Saídas" />
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={Total} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </SummaryConteiner>
  );
}
