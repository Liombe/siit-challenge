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
  <Stack $gap="1rem" data-state={state} className={className}>
    <Avatar src={logo_url} data-bone />
    <h4 data-bone>
      <a href={website_url} target="_blank">
        {name}
      </a>
    </h4>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  </Stack>
);

export const ServiceListItem = styled(ServiceListItemComponent)`
  position: relative;
  align-items: center;
  border-radius: 0.75rem;
  padding-block: 0.75rem;
  h4 {
    font-size: 1rem;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  a:hover {
  }
  a::after {
    content: "";
    position: absolute;
    inset: 0;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: auto;
    visibility: hidden;
  }
  &:hover {
    color: var(--siit-color-accent);
    background-color: var(--siit-color-accent-light);
    padding-inline: 0.75rem;
    margin-inline: -0.75rem;
    svg {
      visibility: visible;
    }
  }
`;
