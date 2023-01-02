import { useSession } from "next-auth/react";
import Link from "next/link";
import Home from "../components/home/home";


export default function Index() {
  const { status } = useSession();

  if (status === "authenticated") {
    return (
     <Home/>
    );
  }

  return <Link href="/api/auth/signin">Sign in</Link>;
}
