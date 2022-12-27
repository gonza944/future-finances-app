import { BuiltInProviderType } from "next-auth/providers";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
  useSession,
} from "next-auth/react";
import { useRouter } from "next/router";
import GoogleIcon from "../../Assets/googleIcon";
import styles from "./signin.module.scss";

type logIn = {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
};

const LogIn: React.FC<logIn> = ({ providers }) => {
  const { status } = useSession();
  const router = useRouter();

  if (!providers) {
    return null;
  }

  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <main className={styles.modal}>
      <div>
        <h2>Welcome to your finance notebook</h2>
        <h3>Log in to start planning your future</h3>
      </div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className={styles.googleButton} onClick={() => signIn(provider.id)}>
            <GoogleIcon />
          </button>
        </div>
      ))}
    </main>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default LogIn;
