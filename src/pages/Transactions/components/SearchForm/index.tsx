import SearchLogo from '../../../../assets/glass.svg'

import { SearchFormContainer } from "./styles";

import { NewTransactionButton } from "../../../../components/Header/styles";
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { TransactionsContext } from '../../../../contexts/TransactionsContext';

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {

    const { getTransactions } = useContext(TransactionsContext)

    const {
        register,
        handleSubmit,
        formState: {
            isSubmitting
        }
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    })

    async function handleSearchTransaction(data: SearchFormInputs) {
        await getTransactions(data.query)

    }


    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
            <input type="text"
                {...register('query')}
                inputMode='search'
                placeholder="Find your transactions" />
            <NewTransactionButton disabled={isSubmitting}>
                <img src={SearchLogo} alt="" />
                Search
            </NewTransactionButton>
        </SearchFormContainer>
    )
}
