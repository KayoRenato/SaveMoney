import { NewTransactionButton } from "../../../../components/Header/styles";
import SearchLogo from '../../../../assets/glass.svg'
import { SearchFormContainer } from "./styles";


export function SearchForm(){

    return (
        <SearchFormContainer>
            <input type="text"
            placeholder="Find your transactions" />
            <NewTransactionButton>
                <img src={SearchLogo} alt="" />
                Search
           </NewTransactionButton>    
        </SearchFormContainer>
    )
}