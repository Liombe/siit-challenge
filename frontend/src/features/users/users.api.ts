import useSWR from 'swr/immutable';

import { api } from "../../lib/api-client";
import { User } from "../../types/api";


const useFetchUsers = ({ serviceId }: { serviceId: String | null }) => {
  const { data, ...restSWR } = useSWR<Array<User>>(
    `/users.json?service_id=${serviceId}`,
    api
  );

  return {
    ...restSWR,
    users: data,
  };
};

export { useFetchUsers };
