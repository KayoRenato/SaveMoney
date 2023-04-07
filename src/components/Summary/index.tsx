import { ArrowCircleUp } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";

import inflowsLogo from "../../assets/sign.svg";
import outflowsLogo from "../../assets/fire.svg";
import balanceLogo from "../../assets/safe.svg";

export function Summary() {
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Inflows</span>
                    <img src={inflowsLogo} alt=''/>
                </header>
                <strong>€ 30.00</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Outflows</span>
                    <img src={outflowsLogo} alt=''/>
                </header>
                <strong>€ 412.10</strong>
            </SummaryCard>

            <SummaryCard colorCard="base">
                <header>
                    <span>Balance</span>
                    <img src={balanceLogo} alt=''/>
                </header>
                <strong>- € 3120.00</strong>
            </SummaryCard>
        </SummaryContainer>
    );
}