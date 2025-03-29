import { styled } from "styled-components";
import { User } from "../../../types/api";
import { Stack } from "../../../components/Stack";
import { Avatar } from "../../../components/Avatar";

type UserListItemComponent = {
  className: string;
  state: "loading" | null;
};

const UserListItemComponent = ({
  className,
  state,
  avatar_url,
  name,
  position,
}: UserListItemComponent & User) => (
  <Stack data-state={state} className={className}>
    <Avatar src={avatar_url} data-bone />
    <Stack $dir="column" $gap="0">
      <h4 data-bone>{name}</h4>
      <p data-bone>{position}</p>
    </Stack>
  </Stack>
);

export const UserListItem = styled(UserListItemComponent)`
  h4,
  p {
    font-size: 0.875rem;
  }
  p {
    color: var(--siit-color-text-light);
  }
`;
