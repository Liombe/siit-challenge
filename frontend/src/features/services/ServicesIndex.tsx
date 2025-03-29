import { Stack } from "../../components/Stack";
import { Service } from "../../types/api";
import { ServiceListItem } from "./components/ServiceListItem";

export function ServicesIndex({
  services,
  error,
  isLoading,
}: {
  services: Array<Service>;
  error: boolean;
  isLoading: boolean;
}) {
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
