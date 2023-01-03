import Link from "next/link";
import LogOutIcon from "../../Assets/logOutIcon";
import styles from "./logOut.module.scss";

const LogOut: React.FC = () => {
  return (
    <Link className={styles.logOut} href="/api/auth/signout">
      <LogOutIcon />
      <p className={styles.copy}>Sign out</p>
    </Link>
  );
};

export default LogOut;
