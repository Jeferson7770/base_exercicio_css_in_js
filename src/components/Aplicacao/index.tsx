import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { FormEvent } from 'react'

import {
  AplicacaoContainer,
  Form,
  Button,
  NomeEmail,
  Contato,
  Setup
} from './style'

type LocationState = {
  titulo?: string
}

const Aplicacao = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { state } = useLocation() as { state: LocationState }

  const enviarFormulario = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(`Candidatura enviada para a vaga ${state?.titulo}`)
    navigate('/')
  }

  return (
    <AplicacaoContainer>
      <h2>
        Candidatura para a vaga <strong>{state?.titulo ?? `#${id}`}</strong>
      </h2>

      <Form onSubmit={enviarFormulario}>
        {/* Nome e Email */}
        <NomeEmail>
          <input required type="text" placeholder="Nome completo" />
          <input required type="email" placeholder="E-mail" />
        </NomeEmail>

        {/* Telefone e Endereço */}
        <Contato>
          <input required type="tel" placeholder="Telefone" />
          <input required type="text" placeholder="Endereço completo" />
        </Contato>

        {/* Setup + Escolaridade */}
        <Setup>
          <div>
            <p>Setup favorito:</p>

            <input defaultChecked type="radio" name="setup" id="windows" />
            <label htmlFor="windows">Windows</label>

            <input type="radio" name="setup" id="linux" />
            <label htmlFor="linux">Linux</label>

            <input type="radio" name="setup" id="mac" />
            <label htmlFor="mac">Mac</label>
          </div>

          <select required>
            <option value="">Escolaridade</option>
            <option value="medio">Ensino médio completo</option>
            <option value="bacharelado">Bacharelado</option>
            <option value="tecnologo">Tecnólogo</option>
            <option value="cursando">Cursando superior</option>
            <option value="pos">Pós-graduado</option>
            <option value="outros">Outros</option>
          </select>
        </Setup>

        <Button type="submit">Enviar candidatura</Button>
      </Form>
    </AplicacaoContainer>
  )
}

export default Aplicacao
