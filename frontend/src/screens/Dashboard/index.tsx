import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Container, Grid } from "./style"

export const Dashboard = () => {

  return(
    <Container>
      <Menu />
      <Grid>
        <Header />
      </Grid>
    </Container>
  )
}