import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { DashboardConteiner } from "./styles";

export function Dashboard() {
  return (
    <DashboardConteiner>
      <Summary />
      <TransactionsTable />
    </DashboardConteiner>
  );
}
