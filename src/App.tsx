import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import Aplicacao from './components/Aplicacao'

import { GlobalStyle } from './globalstyle'
import { Container } from './container'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Hero />

      <Container>
        <Routes>
          <Route path="/" element={<ListaVagas />} />
          <Route path="/candidatar/:id" element={<Aplicacao />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
