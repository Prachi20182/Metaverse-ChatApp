import Image from "next/image";
import { useMoralis } from "react-moralis";
import Logo from "../assets/logo.jpg";
import Background from "../assets/background.png";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative">
      <div
        className="flex flex-col absolute z-50 h-4/5 w-full items-center
      justify-center space-y-4"
      >
        <Image
          className="object-cover rounded-full animate-bounce"
          src={Logo}
          height={200}
          width={200}
        />
        <button
          onClick={authenticate}
          className="bg-blue-200 rounded-lg p-5 font-bold animate-pulse"
        >
          Login to the Metaverse
        </button>
      </div>
      <div className="w-full h-screen">
        <Image src={Background} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Login;
