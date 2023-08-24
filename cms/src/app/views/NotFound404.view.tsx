import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import notFound from '../../assets/not_found.svg'
import Button from '../components/Button/Button'

export default function NotFound404() {
  const navigate = useNavigate();

  return <Wrapper>
    <span>Opa!</span>
    <h1>
      Não encontramos esta página
    </h1>
    <img src={notFound} alt="Não encontrado" />
    <Button
      variant='primary'
      label='Ir para a home'
      onClick={() => navigate('../', {replace: true})}
    />
  </Wrapper>
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  span {
    font-size: 72px;
  }

  h1 {
    font-size: 18px;
    font-weight: 400;
  }
`