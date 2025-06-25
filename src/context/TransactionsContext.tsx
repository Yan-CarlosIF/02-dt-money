import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { Transaction } from "../components/TransactionsTable";
import { api } from "../services/api";

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface ITransactionsContext {
  transactions: Transaction[];
  createTransaction(data: TransactionInput): Promise<void>;
}

export const TransactionsContext = createContext<ITransactionsContext>(
  {} as ITransactionsContext
);

export function TransactionsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(data: TransactionInput) {
    const response = await api.post("/transactions", {
      ...data,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions((prev) => [...prev, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
