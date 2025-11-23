import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import { GlobalStyle } from './globalstyle'
import { Container } from './container'

function App() {
  return (
    <>
      <GlobalStyle />

      <Header />
      <Hero />

      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
