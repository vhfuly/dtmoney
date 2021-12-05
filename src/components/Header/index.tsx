import logoImg from '../../assets/logo.svg'

import { Container, Content, Logo } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header ({onOpenNewTransactionModal}: HeaderProps) {
  
  return (
    <Container>
      <Content >
        <Logo>
          <img src={logoImg} alt="dt money"/>
          <h2>dt money</h2>
        </Logo>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}