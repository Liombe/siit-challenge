import { api } from "../../lib/api-client";
import { Service } from "../../types/api";

import useSWR from "swr/immutable";

const useFetchServices = () => {
  const { data, ...restSWR } = useSWR<Array<Service>>("/services.json", api);

  return {
    ...restSWR,
    services: data,
  };
};

export { useFetchServices };
