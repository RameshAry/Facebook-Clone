import Image from "next/image";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className=" grid place-items-center">
      <Image src="/download.png" width={400} height={400} objectFit="contain" />
      <h1
        onClick={signIn}
        className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer"
      >
        Login with Facebook
      </h1>
    </div>
  );
}
export default Login;
