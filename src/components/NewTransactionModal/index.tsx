import * as Dialog from '@radix-ui/react-dialog'
import {
  ClosedButton,
  Content,
  Description,
  FormDialog,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import iconTransaction from '../../assets/thunder.svg'
import iconExpense from '../../assets/fire.svg'
import iconRevenue from '../../assets/sign.svg'
import { X } from 'phosphor-react'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['expense', 'revenue']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const createTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.createTransaction
    },
  )

  const setIsOpen = useContextSelector(TransactionsContext, (context) => {
    return context.setIsOpen
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { description, price, category, type } = data

    await createTransaction({
      description,
      price,
      category,
      type,
    })
    reset()
    setIsOpen(false)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <div className="header">
          <div className="title">
            <img src={iconTransaction} alt="" />
            <Dialog.Title>New Transaction</Dialog.Title>
          </div>
          <ClosedButton
            disabled={isSubmitting}
            onClick={() => {
              reset()
              setIsOpen(false)
            }}
          >
            <X size={24} weight="bold" />
          </ClosedButton>
        </div>
        <Description>
          <p>Create a new transaction</p>
        </Description>

        <FormDialog onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Insert a description"
            {...register('description')}
          />

          <input
            type="number"
            inputMode="decimal"
            placeholder="Insert a value"
            step={0.01}
            min={0}
            {...register('price', { valueAsNumber: true })}
          />

          <input
            type="text"
            placeholder="Insert a category"
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="revenue" value="revenue">
                    <img src={iconRevenue} alt="" />
                    Revenue
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="expense" value="expense">
                    <img src={iconExpense} alt="" />
                    Expense
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Create
          </button>
        </FormDialog>
      </Content>
    </Dialog.Portal>
  )
}
