import styled from 'styled-components'

export const AplicacaoContainer = styled.section`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  border-radius: 8px;
  margin-top: 56px;

  h2 {
    margin-bottom: 24px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`

export const Button = styled.button`
  border: 1px solid var(--cor-secundaria);
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  font-weight: bold;
  padding: 16px;
  border-radius: 8px;
  max-width: 180px;
  cursor: pointer;
`

export const Linha = styled.div`
  display: grid;
  column-gap: 24px;
  margin-bottom: 32px;
  width: 100%;

  input,
  select {
    padding: 8px;
  }

  select {
    height: 36px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 16px;
  }
`

export const NomeEmail = styled(Linha)`
  grid-template-columns: 1fr 1fr;
`

export const Contato = styled(Linha)`
  grid-template-columns: 1fr 1fr;
`

export const Setup = styled(Linha)`
  grid-template-columns: 1fr 1fr;
  align-items: center;

  p {
    margin-bottom: 8px;
    font-weight: bold;
  }

  label {
    margin-left: 4px;
    margin-right: 12px;
    cursor: pointer;
  }

  input[type='radio'] {
    margin-left: 8px;
  }
`
