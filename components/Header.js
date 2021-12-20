import { useMoralis } from "react-moralis";
import Image from "next/image";
import Logo from "../assets/logo.jpg";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user } = useMoralis();

  return (
    <div
      className="sticky top-0 p-5 z-50 bg-gray-300 shadow-sm
     text-blue-500 border-b-2 border-blue-400"
    >
      <div
        className="grid grid-cols-5 lg:grid-col-6
      items-end lg:items-center"
      >
        <div
          className="relative h-24 w-24 mx-auto
         hidden lg:inline-grid"
        >
          <Image
            src={Logo}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className="col-span-4 text-left lg:text-center">
          <div
            className="relative h-48 w-48 lg:mx-auto
           border-pink-50 border-4 rounded-full"
          >
            {/*Avatar*/}
            <Avatar logoutOnPress />
          </div>
          <h1 className="text-3xl">Welcome to the Metaverse Chat App</h1>
          <h2
            className="text-5xl font-bold
          truncate"
          >
            {user.getUsername()}
          </h2>
          {/*Change username component*/}
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
