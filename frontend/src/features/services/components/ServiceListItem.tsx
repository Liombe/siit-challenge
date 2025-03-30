import { styled } from "styled-components";
import { Service, User } from "../../../types/api";
import { Stack } from "../../../components/Stack";
import { Avatar } from "../../../components/Avatar";

type ServiceListItemComponent = {
  className: string;
  state: "loading" | null;
  computedPrice: number;
  activeUsers: Array<User>;
};

const ServiceListItemComponent = ({
  className,
  state,
  logo_url,
  website_url,
  name,
  computedPrice,
  activeUsers,
}: ServiceListItemComponent & Service) => (
  <Stack $gap="1rem" data-state={state} className={className}>
    <Avatar src={logo_url} data-bone />
    <h4 data-bone>
      <a href={website_url} target="_blank">
        {name}
      </a>
    </h4>
    <Stack className="monthly-price" $align="center">
      <span>
        <strong>${computedPrice}</strong>/month
      </span>
      &middot;
      <Stack $align="center" $gap="0.125rem">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={20}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
          />
        </svg>
        <strong>{activeUsers?.length}</strong>
      </Stack>
    </Stack>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="external-link"
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

  a::after {
    content: "";
    position: absolute;
    inset: 0;
  }

  .monthly-price {
    margin-left: auto;
    color: var(--siit-color-text-light);

    strong {
      color: var(--siit-color-text);
    }
  }

  .external-link {
    width: 1.5rem;
    height: 1.5rem;
    visibility: hidden;
  }

  &:hover {
    color: var(--siit-color-accent);
    background-color: var(--siit-color-accent-light);
    padding-inline: 0.75rem;
    margin-inline: -0.75rem;

    .monthly-price {
      &,
      strong {
        color: inherit;
      }
    }

    .external-link {
      visibility: visible;
    }
  }
`;
