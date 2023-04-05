import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from "../../assets/wallet.svg";
import logoButton from "../../assets/thunder.svg";

export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <div className="logo">
                <img src={logoImg} alt=""/>
                <div className="title">
                    <h1>Save</h1>
                    <h2>Money</h2>
                </div>
                </div>
                <NewTransactionButton> <img src={logoButton} alt=""/>New Transaction</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
        
}