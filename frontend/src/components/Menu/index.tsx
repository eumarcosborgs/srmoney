import { Container, Option, PoweredBy } from "./styles"

export const Menu = () => {
  return (
    <Container>
      {/* <Logo>
        <a href="http://localhost:3000/">
          <img src="/images/jsbananas.png" alt="js.bananas" />
        </a>
      </Logo> */}
      <Option isActive={true}>
        <div>
          <img src="/home.svg" alt="dashboard" />
          <p>Dashboard</p>
        </div>
        <img src="/angle-right-b.svg" alt="arrow" />
      </Option>      
       
      <Option isActive={false}>
        <div>
          <img src="/book-close.svg" alt="types" />
          <p>Tipos</p> 
        </div>
        <img src="/angle-right-b.svg" alt="arrow" />
      </Option>

      <Option isActive={false}>
        <div>
          <img src="/wallet.svg" alt="months" />
          <p>Mêses</p> 
        </div>
        <img src="/angle-right-b.svg" alt="arrow" />
      </Option>

      <Option isActive={false}>
        <div>
          <img src="/file.svg" alt="transactions" />
          <p>Transações</p> 
        </div>
        <img src="/angle-right-b.svg" alt="arrow" />
      </Option>

      <Option isActive={false}>
        <div>
          <img src="/folder-user.svg" alt="data" />
          <p>Meus dados</p>
        </div>
        <img src="/angle-right-b.svg" alt="arrow" />
      </Option>

      <Option isActive={false}>
        <div>
          <img src="/help.svg" alt="help" />
          <p>Me ajuda</p>
        </div>
        <img src="/angle-right-b.svg" alt="arrow" />
      </Option>

      <PoweredBy>
        <a href="https://www.instagram.com/eumarcosborgs/" target="instagram">
          By <span>Marcos Paulo</span>
        </a>
      </PoweredBy>
    </Container>
  )
}