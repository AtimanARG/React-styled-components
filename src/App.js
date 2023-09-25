import React, { useState } from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./globalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { Btn, BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

function App() {

  const [tema, setTema] = useState(true);

  const toggleTheme = () => {
    setTema((tema) => !tema)
  }

  return (
    <ThemeProvider theme={ tema ? temaClaro : temaOscuro }>
      <GlobalStyle />
      <BtnTema onClick={toggleTheme}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
