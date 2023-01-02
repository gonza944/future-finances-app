import Link from "next/link";
import styles from "./logOut.module.scss";

const LogOut: React.FC = () => {
  return (
    <Link className={styles.logOut} href="/api/auth/signout">
      <p>Sign out</p>
    </Link>
  );
};

export default LogOut;
