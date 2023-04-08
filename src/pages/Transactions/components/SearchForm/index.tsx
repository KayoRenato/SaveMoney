import SearchLogo from '../../../../assets/glass.svg'

import { SearchFormContainer } from "./styles";

import { NewTransactionButton } from "../../../../components/Header/styles";


export function SearchForm(){

    return (
        <SearchFormContainer>
            <input type="text"
            inputMode='search'
            placeholder="Find your transactions" />
            <NewTransactionButton>
                <img src={SearchLogo} alt="" />
                Search
           </NewTransactionButton>    
        </SearchFormContainer>
    )
}