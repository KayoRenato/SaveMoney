import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transactions";
import { TransactionProvider } from "./contexts/TransactionsContext";

export function App() {

  return (
    <ThemeProvider theme={lightTheme} >
      <GlobalStyle />
      <TransactionProvider>
        <Transactions />
      </TransactionProvider>
    </ThemeProvider>
  )
}


