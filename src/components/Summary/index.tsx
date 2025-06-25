import { SummaryConteiner } from "./styles";
import ArrowUp from "../../assets/arrow_up.svg";
import ArrowDown from "../../assets/arrow_down.svg";
import Total from "../../assets/money.svg";
import { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionsContext";
import { FormatNumber } from "../../utils/format";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const { deposits, withdraws, total } = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <SummaryConteiner>
      <div>
        <header>
          <p>Entradas</p>
          <img src={ArrowUp} alt="Entradas" />
        </header>
        <strong>{FormatNumber(deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={ArrowDown} alt="Saídas" />
        </header>
        <strong>- {FormatNumber(withdraws)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={Total} alt="Total" />
        </header>
        <strong>{FormatNumber(total)}</strong>
      </div>
    </SummaryConteiner>
  );
}
