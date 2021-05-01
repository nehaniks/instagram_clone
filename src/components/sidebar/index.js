import useUser from "../../hooks/use-user";

export default function Sidebar() {
  const {
    user: { fullName, username, userId },
  } = useUser();
  // console.log("fullName, username, userId", fullName, username, userId);
  console.log("fullname, username, uid", fullName, username, userId);
  return <p>This is the Sidebar</p>;
}
