import { Service } from "../../types/api";
import { useFetchUsers } from "../users/users.api";
import { ServicesList } from "./ServicesList";

export function ServicesIndex(props: {
  services: Array<Service>;
  error: boolean;
  isLoading: boolean;
}) {
  const { users } = useFetchUsers({});

  return (
    <>
      <h2>Services</h2>
      <ServicesList users={users} {...props} />
    </>
  );
}
