import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./components/Container";
import { ServicesIndex } from "./features/services/ServicesIndex";
import { useFetchServices } from "./features/services/services.api";
import { UsersIndex } from "./features/users";
import { useFetchUsers } from "./features/users/users.api";

export default function App() {
  const [serviceId, setServiceId] = useState<String>("");
  const {
    users,
    error: usersError,
    isValidating: usersIsLoading,
  } = useFetchUsers({ serviceId });

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
          <UsersIndex
            users={users}
            error={usersError}
            isLoading={usersIsLoading}
            filters={
              <select
                value={String(serviceId)}
                onChange={(e) => setServiceId(e.target.value)}
              >
                <option value="">Select service</option>
                {services?.map((service) => (
                  <option value={String(service.id)}>{service.name}</option>
                ))}
              </select>
            }
          />
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
