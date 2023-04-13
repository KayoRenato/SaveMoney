import firebase from '../firebase/config'
import { ReactNode, useEffect, useState, useCallback } from 'react'
import { createContext } from 'use-context-selector'

interface TransactionProps {
  id?: string
  description: string
  descriptionLowercase: string
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

  const getTransactions = useCallback(async (query?: string) => {
    let transactionsData: TransactionProps[] = []

    if (query) {
      const queryLower = query.toLowerCase()

      const snapshot = await firebase
        .firestore()
        .collection('transactions')
        .get()

      const filteredData = snapshot.docs.filter((doc) => {
        const descriptionLowercase = doc.data().description.toLowerCase()
        return descriptionLowercase.includes(queryLower)
      })

      transactionsData = filteredData.map((doc) =>
        doc.data(),
      ) as TransactionProps[]
    } else {
      const transactionsSnapshot = await firebase
        .firestore()
        .collection('transactions')
        .get()

      transactionsData = transactionsSnapshot.docs.map((doc) =>
        doc.data(),
      ) as TransactionProps[]
    }

    setTransactions(transactionsData)
  }, [])

  const createTransaction = useCallback(
    async (data: CreateTransactionProps) => {
      const { category, description, type, price } = data

      const categoryUppercase = category.toUpperCase()
      const transactionData: TransactionProps = {
        category: categoryUppercase,
        description,
        descriptionLowercase: description.toLowerCase(),
        type,
        price,
        createdAt: new Date().toISOString(),
      }

      const docRef = await firebase
        .firestore()
        .collection('transactions')
        .add(transactionData)
      const transactionDoc = await docRef.get()
      const transaction = transactionDoc.data() as TransactionProps

      setTransactions((currentTransactions) => [
        transaction,
        ...currentTransactions,
      ])
    },
    [],
  )

  useEffect(() => {
    getTransactions()
  }, [getTransactions])

  return (
    <TransactionsContext.Provider
      value={{ transactions, getTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
