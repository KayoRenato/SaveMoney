import { ArrowCircleUp } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";

import revenueLogo from "../../assets/sign.svg";
import expensesLogo from "../../assets/fire.svg";
import balanceLogo from "../../assets/safe.svg";

export function Summary() {
    return (
        <SummaryContainer>
            <SummaryCard colorCard="balance">
                <header>
                    <span>Balance</span>
                    <img src={balanceLogo} alt=''/>
                </header>
                <strong>- € 3120.00</strong>
            </SummaryCard>
            <SummaryCard colorCard="revenue">
                <header>
                    <span>Revenue</span>
                    <img src={revenueLogo} alt=''/>
                </header>
                <strong>€ 30.00</strong>
            </SummaryCard>

            <SummaryCard colorCard="expense">
                <header>
                    <span>Expenses</span>
                    <img src={expensesLogo} alt=''/>
                </header>
                <strong>€ 412.10</strong>
            </SummaryCard>

        </SummaryContainer>
    );
}