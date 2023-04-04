import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme  } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {

  return (
    <ThemeProvider theme={lightTheme} >
      <GlobalStyle/>
      <h1>Hello World</h1>
      
    </ThemeProvider>
  )
}


