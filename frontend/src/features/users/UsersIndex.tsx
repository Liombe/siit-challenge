import { ReactElement } from "react";
import { Stack } from "../../components/Stack";
import { User } from "../../types/api";
import { UserListItem } from "./components/UserListIem";

export function UsersIndex({
  users,
  error,
  isLoading,
  filters,
}: {
  users: Array<User>;
  error: boolean;
  isLoading: boolean;
  filters: ReactElement;
}) {
  if (error) {
    return <h2>Error</h2>;
  }

  if (isLoading) {
    return (
      <>
        <Stack as="h2" $align="center" $justify="space-between">
          Users
        </Stack>
        <Stack $dir="column" $gap="1rem">
          {Array.from(Array(2), (_, index) => index).map(() => (
            <UserListItem
              state="loading"
              name="User with a firstname and a lastname"
              position="User position"
              avatar_url="https://"
            />
          ))}
        </Stack>
      </>
    );
  }

  return (
    <>
      <Stack as="h2" $align="center" $justify="space-between">
        Users {filters}
      </Stack>
      {!users?.length ? (
        "No user"
      ) : (
        <Stack $dir="column" $gap="1rem">
          {users.map((user) => (
            <UserListItem {...user} />
          ))}
        </Stack>
      )}
    </>
  );
}
