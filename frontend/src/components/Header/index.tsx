import { Container, SignOutButton } from "./style"

export const Header = () => {
  return (
    <Container>
      <main>
        <a>
          <h1>DASHBOARD</h1>
        </a>
        
        <SignOutButton
          type='button'
          whileHover={{ y: -2 }}
          whileTap={{ y: 2 }} 
          onClick={() => {}} 
        >
          Desconectar
        </SignOutButton>
      </main>
    </Container>
  )
}