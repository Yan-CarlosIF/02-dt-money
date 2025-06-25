export function FormatNumber(number: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number);
}

export function FormatDate(date: Date) {
  return new Intl.DateTimeFormat("pt-BR").format(date);
}
