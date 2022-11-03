export const formatCurrency = (value: number, pref?: boolean) =>
  new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: pref ? 'currency' : 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
