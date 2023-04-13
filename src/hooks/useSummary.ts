import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'revenue') {
        acc.revenues += transaction.price
        acc.balance += transaction.price
      } else if (transaction.type === 'expense') {
        acc.expenses += transaction.price
        acc.balance -= transaction.price
      }

      return acc
    },
    { balance: 0, revenues: 0, expenses: 0 },
  )

  return summary
}
