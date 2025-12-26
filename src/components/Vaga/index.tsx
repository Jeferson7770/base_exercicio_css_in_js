import { VagaItem, VagaTitulo, VagaLink } from './styles'
import { Link } from 'react-router-dom'

type Props = {
  id: number
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = ({
  id,
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos
}: Props) => (
  <VagaItem>
    <VagaTitulo>{titulo}</VagaTitulo>

    <ul>
      <li>Localização: {localizacao}</li>
      <li>Senioridade: {nivel}</li>
      <li>Tipo de contratação: {modalidade}</li>
      <li>
        Salário: {salarioMin} - {salarioMax}
      </li>
      <li>Requisitos: {requisitos.join(', ')}</li>
    </ul>

    <VagaLink as={Link} to={`/candidatar/${id}`} state={{ titulo }}>
      Ver detalhes e candidatar-se
    </VagaLink>
  </VagaItem>
)

export default Vaga
