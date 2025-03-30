import { Stack } from "../../components/Stack";
import { Service, User } from "../../types/api";
import { ServiceListItem } from "./components/ServiceListItem";
import { computeServicePrice } from "./services.utils";

export function ServicesList({
  services,
  error,
  isLoading,
  users,
}: {
  services: Array<Service>;
  error: boolean;
  isLoading: boolean;
  users: Array<User>;
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
    <Stack $dir="column" $gap="0">
      {services.map((service) => {
        const activeUsers = users?.filter((user) =>
          user.service_ids.includes(service.id)
        );
        return (
          <ServiceListItem
            key={String(service.id)}
            activeUsers={activeUsers}
            computedPrice={computeServicePrice(
              service.price,
              activeUsers?.length
            )}
            {...service}
          />
        );
      })}
    </Stack>
  );
}
