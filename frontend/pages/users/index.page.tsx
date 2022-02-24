import { UserListAdapter } from "@/presentation/user/list/adapter";
import UserList from "./components/user-list";

const App = () => {
  const { state } = UserListAdapter();
  return (
    <>
      <div>
        <h1>This is user list</h1>
        <UserList items={state} />
      </div>
    </>
  );
};
export default App;
