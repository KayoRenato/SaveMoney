import revenueLogo from "../../assets/sign.svg";
import expensesLogo from "../../assets/fire.svg";
import balanceLogo from "../../assets/safe.svg";

import { SummaryCard, SummaryContainer } from "./styles";

import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { priceFormatter } from "../../Utils/formatter";

export function Summary() {

    const { transactions } = useContext(TransactionsContext)
     console.log(transactions)
    
    const summary = transactions.reduce(
        (acc, transaction) => {
            if (transaction.type === 'inflow') {
                acc.revenues += transaction.price
                acc.balance += transaction.price
            } else if (transaction.type === 'outflow') {
                acc.expenses += transaction.price
                acc.balance -= transaction.price
            }

            return acc
        },
        { balance: 0, revenues: 0, expenses: 0 }
    )

    return (
        <SummaryContainer>
            <SummaryCard colorCard="balance">
                <header>
                    <span>Balance</span>
                    <img src={balanceLogo} alt='' />
                </header>
                <strong>{priceFormatter.format(summary.balance)}</strong>
            </SummaryCard>
            <SummaryCard colorCard="revenue">
                <header>
                    <span>Revenues</span>
                    <img src={revenueLogo} alt='' />
                </header>
                <strong>{priceFormatter.format(summary.revenues)}</strong>
            </SummaryCard>

            <SummaryCard colorCard="expense">
                <header>
                    <span>Expenses</span>
                    <img src={expensesLogo} alt='' />
                </header>
                <strong>- {priceFormatter.format(summary.expenses)}</strong>
            </SummaryCard>

        </SummaryContainer>
    );
}