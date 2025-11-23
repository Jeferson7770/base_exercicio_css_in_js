import styled from 'styled-components'

export const Form = styled.section`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: var(--cor-principal);
    opacity: 0.7;
  }
`

export const HeroTitle = styled.h2`
  position: relative;
  color: var(--cor-secundaria);
  font-family: Lato, sans-serif;
  font-size: 48px;
  line-height: 1.2;
  max-width: 900px;
`
