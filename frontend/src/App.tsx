import { GlobalStyle } from "./GlobalStyle";
import { BrandLogo } from "./components/BrandLogo";
import { Container } from "./components/Container";
import { ServicesIndex } from "./features/services/ServicesIndex";
import { useFetchServices } from "./features/services/services.api";
import { UsersIndex } from "./features/users";

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
          <h1 aria-label="Siit">
            <BrandLogo />
          </h1>
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
