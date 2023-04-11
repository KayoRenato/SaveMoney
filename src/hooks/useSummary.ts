import { useContext } from "react"
import { TransactionsContext } from "../contexts/TransactionsContext"

export function useSummary() {


    const { transactions } = useContext(TransactionsContext)
    console.log(transactions)

    const summary = transactions.reduce(
        (acc, transaction) => {
            if (transaction.type === 'inflow') {
                acc.revenues += transaction.price
                acc.balance += transaction.price
            } else if (transaction.type === 'outflow') {
                acc.expenses += transaction.price
                acc.balance -= transaction.price
            }

            return acc
        },
        { balance: 0, revenues: 0, expenses: 0 }
    )

    return summary
}