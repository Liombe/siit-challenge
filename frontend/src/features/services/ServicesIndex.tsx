import { useFetchServices } from "./services.api";
import { Stack } from "../../components/Stack";
import { ServiceListItem } from "./components/ServiceListItem";

export function ServicesIndex() {
  const { services, error, isLoading } = useFetchServices();

  if (error) {
    return <h1>Error</h1>;
  }

  if (isLoading) {
    return (
      <Stack $dir="column" $gap="0">
        {Array.from(Array(5), (_, index) => index).map(() => (
          <ServiceListItem
            state="loading"
            name="A good service"
            logo_url="https://"
          />
        ))}
      </Stack>
    );
  }

  return (
    <>
      <h2>Services</h2>
      <Stack $dir="column" $gap="0">
        {services.map((service) => (
          <ServiceListItem {...service} />
        ))}
      </Stack>
    </>
  );
}
