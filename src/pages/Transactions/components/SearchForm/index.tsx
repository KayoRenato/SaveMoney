import SearchLogo from '../../../../assets/glass.svg'

import { SearchFormContainer } from './styles'

import { NewTransactionButton } from '../../../../components/Header/styles'
import { memo } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

function SearchFormComponent() {
  const getTransactions = useContextSelector(TransactionsContext, (context) => {
    return context.getTransactions
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransaction(data: SearchFormInputs) {
    await getTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        {...register('query')}
        inputMode="search"
        placeholder="Find your transactions"
      />
      <NewTransactionButton disabled={isSubmitting}>
        <img src={SearchLogo} alt="" />
        Search
      </NewTransactionButton>
    </SearchFormContainer>
  )
}

// only recommend using memo when you know that changing HTML is
//  enormous and is more expensive than comparing hooks and props changes

export const SearchForm = memo(SearchFormComponent)
