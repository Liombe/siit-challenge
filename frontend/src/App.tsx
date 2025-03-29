import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./components/Container";
import { ServicesIndex } from "./features/services/ServicesIndex";
import { UsersIndex } from "./features/users";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Container>
          <h1>Siit</h1>
          <UsersIndex />
          <ServicesIndex />
        </Container>
      </main>
    </>
  );
}
