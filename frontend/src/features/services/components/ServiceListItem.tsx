import { styled } from "styled-components";
import { Service } from "../../../types/api";
import { Stack } from "../../../components/Stack";
import { Avatar } from "../../../components/Avatar";

type ServiceListItemComponent = {
  className: string;
  state: "loading" | null;
};

const ServiceListItemComponent = ({
  className,
  state,
  logo_url,
  website_url,
  name,
}: ServiceListItemComponent & Service) => (
  <Stack data-state={state} className={className}>
    <Avatar src={logo_url} data-bone />
    <h4 data-bone>
      <a href={website_url}>{name}</a>
    </h4>
  </Stack>
);

export const ServiceListItem = styled(ServiceListItemComponent)`
  position: relative;
  a::after {
    content: "";
    position: absolute;
    inset: 0;
  }
`;
