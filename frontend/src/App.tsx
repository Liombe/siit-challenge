import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./components/Container";
import { ServicesIndex } from "./features/services/ServicesIndex";
import { useFetchServices } from "./features/services/services.api";
import { UsersIndex } from "./features/users";
import { useFetchUsers } from "./features/users/users.api";

export default function App() {
  const {
    services,
    error: servicesError,
    isValidating: servicesIsLoading,
  } = useFetchServices();

  return (
    <>
      <GlobalStyle />
      <main>
        <Container>
          <h1>Siit</h1>
          <UsersIndex services={services} />
          <ServicesIndex
            services={services}
            error={servicesError}
            isLoading={servicesIsLoading}
          />
        </Container>
      </main>
    </>
  );
}
