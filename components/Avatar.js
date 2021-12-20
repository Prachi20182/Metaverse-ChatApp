import { useMoralis } from "react-moralis";
import Image from "next/image";

function Avatar({ username, logoutOnPress }) {
  const { user, logout } = useMoralis();
  return (
    <Image
      className="rounded-full bg-blue-50 cursor-pointer
    hover:opacity-75"
      src={`https://avatars.dicebear.com/api/micah/${
        username || user.get("username")
      }.svg`}
      onClick={() => logoutOnPress && logout()}
      layout="fill"
    />
  );
}

export default Avatar;
