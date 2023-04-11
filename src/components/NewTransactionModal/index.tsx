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
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['expense', 'revenue']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionsContext)

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
          <ClosedButton disabled={isSubmitting}>
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
