import { Stack } from "../../components/Stack";
import { User } from "../../types/api";
import { UserListItem } from "./components/UserListIem";

export function UsersList({
  users,
  error,
  isLoading,
}: {
  users: Array<User>;
  error: boolean;
  isLoading: boolean;
}) {
  if (error) {
    return <h3>Sorry, we couldn't fetch users</h3>;
  }

  if (isLoading) {
    return (
      <Stack $dir="column" $gap="1rem">
        {Array.from(Array(2), (_, index) => index).map((_, index) => (
          <UserListItem
            key={String(index)}
            state="loading"
            name="User with a firstname and a lastname"
            position="User position"
            avatar_url="https://"
          />
        ))}
      </Stack>
    );
  }

  return !users?.length ? (
    "No user"
  ) : (
    <Stack $dir="column" $gap="1rem">
      {users.map((user, index) => (
        <UserListItem key={String(index)} {...user} />
      ))}
    </Stack>
  );
}
