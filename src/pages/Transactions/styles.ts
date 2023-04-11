import styled from 'styled-components'

export const TransactionContainer = styled.main`
  width: 100%;
  max-width: 1120px;

  overflow-x: auto;

  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionTable = styled.table`
  width: 100%;
  margin-top: 1.5rem;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    padding: 1.5rem 2rem;
    background-color: ${(props) => props.theme['secondary-50']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PriceHighlightProps {
  variant: 'inflow' | 'outflow'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'inflow'
      ? props.theme['green-500']
      : props.theme['red-500']};
`
