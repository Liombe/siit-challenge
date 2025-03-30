import { useMemo, useState } from "react";
import { Service } from "../../types/api";
import { useFetchUsers } from "../users/users.api";
import { ServicesList } from "./ServicesList";
import { Stack } from "../../components/Stack";

export function ServicesIndex({
  services,
  ...props
}: {
  services: Array<Service>;
  error: boolean;
  isLoading: boolean;
}) {
  const [query, setQuery] = useState<string>("");
  const { users } = useFetchUsers({ serviceId: "" });
  const filteredServices = useMemo(
    () =>
      query
        ? services?.filter((service) =>
            new RegExp(query, "gi").test(service.name)
          )
        : services,
    [query, services]
  );

  return (
    <>
      <Stack as="h2" $justify="space-between" $align="center" $wrap="wrap">
        Services{" "}
        <input
          type="text"
          placeholder="Search service"
          onInput={(e) => setQuery((e.target as HTMLInputElement).value.trim())}
          onChange={(e) => setQuery(e.target.value.trim())}
        />
      </Stack>
      <ServicesList users={users} services={filteredServices} {...props} />
    </>
  );
}
