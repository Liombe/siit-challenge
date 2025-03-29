import { api } from "../../lib/api-client";
import { User } from "../../types/api";

import useSWR from 'swr/immutable';

const useFetchUsers = () => {
  const { data, ...restSWR } = useSWR<Array<User>>(
    '/users.json',
    api
  );

  return {
    ...restSWR,
    users: data,
  };
};

export { useFetchUsers };