import revenueLogo from '../../assets/sign.svg'
import expensesLogo from '../../assets/fire.svg'
import balanceLogo from '../../assets/safe.svg'

import { SummaryCard, SummaryContainer } from './styles'

import { priceFormatter } from '../../Utils/formatter'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard colorCard="balance">
        <header>
          <span>Balance</span>
          <img src={balanceLogo} alt="" />
        </header>
        <strong>{priceFormatter.format(summary.balance)}</strong>
      </SummaryCard>
      <SummaryCard colorCard="revenue">
        <header>
          <span>Revenues</span>
          <img src={revenueLogo} alt="" />
        </header>
        <strong>{priceFormatter.format(summary.revenues)}</strong>
      </SummaryCard>

      <SummaryCard colorCard="expense">
        <header>
          <span>Expenses</span>
          <img src={expensesLogo} alt="" />
        </header>
        <strong>- {priceFormatter.format(summary.expenses)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
