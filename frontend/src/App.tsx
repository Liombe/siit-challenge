import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./components/Container";
import { UsersIndex } from "./features/users";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Container>
          <h1>Siit</h1>
          <UsersIndex />
        </Container>
      </main>
    </>
  );
}
