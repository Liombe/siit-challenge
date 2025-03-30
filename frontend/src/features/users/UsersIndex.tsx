import { useMemo, useState } from "react";
import { Stack } from "../../components/Stack";
import { Service } from "../../types/api";
import { useFetchUsers } from "./users.api";
import { UsersList } from "./UsersList";

export function UsersIndex({ services }: { services: Array<Service> }) {
  const [query, setQuery] = useState<string>("");
  const [serviceId, setServiceId] = useState<string>("");
  const { users, error, isLoading } = useFetchUsers({ serviceId });

  const filtredUsers = useMemo(
    () =>
      query
        ? users?.filter((user) => new RegExp(query, "gi").test(user.name))
        : users,
    [query, users]
  );

  return (
    <>
      <Stack as="h2" $justify="space-between" $align="center" $wrap="wrap">
        Users
        <Stack $align="center" $wrap="wrap">
          <input
            type="text"
            placeholder="Search service"
            onInput={(e) =>
              setQuery((e.target as HTMLInputElement).value.trim())
            }
            onChange={(e) => setQuery(e.target.value.trim())}
          />
          <select
            value={String(serviceId)}
            onChange={(e) => setServiceId(e.target.value || "")}
          >
            <option value="">Select service</option>
            {services?.map((service) => (
              <option key={String(service.id)} value={String(service.id)}>
                {service.name}
              </option>
            ))}
          </select>
        </Stack>
      </Stack>
      <UsersList users={filtredUsers} isLoading={isLoading} error={error} />
    </>
  );
}
