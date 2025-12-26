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
    alert(`Candidatura enviada para a vaga ${state?.titulo ?? id}`)
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
          <input
            data-testid="input-nome"
            name="nome"
            required
            type="text"
            placeholder="Nome completo"
          />

          <input
            data-testid="input-email"
            name="email"
            required
            type="email"
            placeholder="E-mail"
          />
        </NomeEmail>

        {/* Telefone e Endereço */}
        <Contato>
          <input
            data-testid="input-telefone"
            name="telefone"
            required
            type="tel"
            placeholder="Telefone"
          />

          <input
            data-testid="input-endereco"
            name="endereco"
            required
            type="text"
            placeholder="Endereço completo"
          />
        </Contato>

        {/* Setup + Escolaridade */}
        <Setup>
          <div>
            <p>Setup favorito:</p>

            <input
              data-testid="radio-windows"
              name="setup"
              defaultChecked
              type="radio"
              id="windows"
              value="windows"
            />
            <label htmlFor="windows">Windows</label>

            <input
              data-testid="radio-linux"
              name="setup"
              type="radio"
              id="linux"
              value="linux"
            />
            <label htmlFor="linux">Linux</label>

            <input
              data-testid="radio-mac"
              name="setup"
              type="radio"
              id="mac"
              value="mac"
            />
            <label htmlFor="mac">Mac</label>
          </div>

          <select
            data-testid="select-escolaridade"
            name="escolaridade"
            required
          >
            <option value="">Escolaridade</option>
            <option value="medio">Ensino médio completo</option>
            <option value="bacharelado">Bacharelado</option>
            <option value="tecnologo">Tecnólogo</option>
            <option value="cursando">Cursando superior</option>
            <option value="pos">Pós-graduado</option>
            <option value="outros">Outros</option>
          </select>
        </Setup>

        <Button data-testid="botao-enviar" type="submit">
          Enviar candidatura
        </Button>
      </Form>
    </AplicacaoContainer>
  )
}

export default Aplicacao
