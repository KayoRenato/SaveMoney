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
  isOpen: boolean
  transactions: TransactionProps[]
  getTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionProps) => Promise<void>
  setIsOpen: (isOpenModal: boolean) => void
}

interface TransactionProviderInput {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionProvider({ children }: TransactionProviderInput) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  const [isOpen, setIsOpen] = useState(false)

  const getTransactions = useCallback(async (query?: string) => {
    let transactionsData: TransactionProps[] = []

    const transactionsRef = firebase.firestore().collection('transactions')

    if (query) {
      const queryLower = query.toLowerCase()

      const snapshot = await transactionsRef.get()

      const filteredData = snapshot.docs
        .filter((doc) => {
          const descriptionLowercase = doc.data().description.toLowerCase()
          return descriptionLowercase.includes(queryLower)
        })
        .sort((a, b) => {
          const aCreatedAt = a.data().createdAt
          const bCreatedAt = b.data().createdAt
          return bCreatedAt.localeCompare(aCreatedAt)
        })

      transactionsData = filteredData.map((doc) =>
        doc.data(),
      ) as TransactionProps[]
    } else {
      const transactionsSnapshot = await transactionsRef
        .orderBy('createdAt', 'desc')
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
      value={{
        isOpen,
        transactions,
        getTransactions,
        createTransaction,
        setIsOpen,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
