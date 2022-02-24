import { UserItems } from "@/presentation/user/list/convert";

const UserList = ({ items }: { items: UserItems }) => {
  return (
    <>
      {items.map((item) => (
        <li key={item.key}>{item.name}</li>
      ))}
    </>
  );
};

export default UserList;
