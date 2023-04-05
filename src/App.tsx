import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme  } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transactions";

export function App() {

  return (
    <ThemeProvider theme={lightTheme} >
      <GlobalStyle/>
      <Transactions/>
    </ThemeProvider>
  )
}


