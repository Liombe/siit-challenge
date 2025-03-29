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
      <Stack $dir="column" $gap="1rem">
        {Array.from(Array(5), (_, index) => index).map(() => (
          <ServiceListItem
            state="loading"
            name="User with a firstname and a lastname"
            position="User position"
            avatar_url="https://"
          />
        ))}
      </Stack>
    );
  }

  return (
    <>
      <h2>Services</h2>
      <Stack $dir="column" $gap="1rem">
        {services.map((service) => (
          <ServiceListItem {...service} />
        ))}
      </Stack>
    </>
  );
}
