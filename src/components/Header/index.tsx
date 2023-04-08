import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from "../../assets/logoName.svg";
import logoButton from "../../assets/thunder.svg";

export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <div className="logo">
                    <img src={logoImg} alt=""/>
                </div>
                <NewTransactionButton> <img src={logoButton} alt=""/>New Transaction</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
        
} 