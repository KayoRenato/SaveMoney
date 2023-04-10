import { ReactNode, createContext, useEffect, useState } from "react";

interface TransactionProps {
    id: number
    description: string,
    price: number,
    type: 'inflow' | 'outflow',
    category: string,
    createdAt: string
}

interface TransactionContextType {
    transactions: TransactionProps[]
}

interface TransactionProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<TransactionProps[]>([])

    async function getTransactions() {
        const response = await fetch('http://localhost:3333/transactions')
        const data = await response.json()
        setTransactions(data)
    }


    useEffect(() => {
        getTransactions()
    }, [])

    return (
        <TransactionsContext.Provider value={{ transactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}