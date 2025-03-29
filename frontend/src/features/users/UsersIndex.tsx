import { useFetchUsers } from "./users.api";
import { Stack } from "../../components/Stack";
import { UserListItem } from "./components/UserListIem";

export function UsersIndex() {
  const { users, error, isLoading } = useFetchUsers();

  if (error) {
    return <h1>Error</h1>;
  }

  if (isLoading) {
    return (
      <Stack $dir="column" $gap="1rem">
        {Array.from(Array(5), (_, index) => index).map(() => (
          <UserListItem
            state="loading"
            name="User with a firstname and a lastname"
            position="User position"
            avatar_url="https://"
          />
        ))}
      </Stack>
    );
  }

  return (
    <>
      <h2>Users</h2>
      <Stack $dir="column" $gap="1rem">
        {users.map((user) => (
          <UserListItem {...user} />
        ))}
      </Stack>
    </>
  );
}
