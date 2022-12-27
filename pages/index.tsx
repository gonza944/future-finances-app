import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { status } = useSession();

  if (status === "authenticated") {
    return (
      <div>
        <Link href="/api/auth/signout">Sign out</Link>
      </div>
    );
  }

  return <Link href="/api/auth/signin">Sign in</Link>;
}
