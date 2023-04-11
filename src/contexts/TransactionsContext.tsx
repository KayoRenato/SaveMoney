import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface TransactionProps {
  id: number
  description: string
  price: number
  type: 'revenue' | 'expense'
  category: string
  createdAt: string
}

interface CreateTransactionProps {
  description: string
  price: number
  type: 'revenue' | 'expense'
  category: string
}
interface TransactionContextType {
  transactions: TransactionProps[]
  getTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionProps) => Promise<void>
}

interface TransactionProviderInput {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionProvider({ children }: TransactionProviderInput) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  async function getTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  async function createTransaction(data: CreateTransactionProps) {
    const { category, description, type, price } = data

    const response = await api.post('/transactions', {
      category,
      description,
      type,
      price,
      createdAt: new Date(),
    })

    setTransactions((currentTransactions) => [
      response.data,
      ...currentTransactions,
    ])
  }

  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        getTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
