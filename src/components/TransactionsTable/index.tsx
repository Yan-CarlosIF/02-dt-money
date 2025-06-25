import { useEffect, useState } from "react";
import { TransactionsTableConteiner } from "./styles";
import { api } from "../../services/api";
import { FormatDate, FormatNumber } from "../../utils/format";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  console.log(transactions);

  return (
    <TransactionsTableConteiner>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {transaction.type === "withdraw" && "- "}
                {FormatNumber(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{FormatDate(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TransactionsTableConteiner>
  );
}
