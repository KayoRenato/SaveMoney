import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme  } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transactions";
import { Summary } from "./components/Summary";

export function App() {

  return (
    <ThemeProvider theme={lightTheme} >
      <GlobalStyle/>
      <Transactions/>
      <Summary/>
    </ThemeProvider>
  )
}


