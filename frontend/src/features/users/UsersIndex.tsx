import { ReactElement, useState } from "react";
import { Stack } from "../../components/Stack";
import { Service } from "../../types/api";
import { useFetchUsers } from "./users.api";
import { UsersList } from "./UsersList";

export function UsersIndex({ services }: { services: Array<Service> }) {
  const [serviceId, setServiceId] = useState<String>("");
  const { users, error, isLoading } = useFetchUsers({ serviceId });

  return (
    <>
      <Stack as="h2" $justify="space-between" $align="center">
        Users
        <select
          value={String(serviceId)}
          onChange={(e) => setServiceId(e.target.value)}
        >
          <option value="">Select service</option>
          {services?.map((service) => (
            <option value={String(service.id)}>{service.name}</option>
          ))}
        </select>
      </Stack>
      <UsersList users={users} isLoading={isLoading} error={error} />
    </>
  );
}
