import Link from "next/link";
import styles from "./sideMenu.module.scss";

const SideMenu: React.FC = () => {
  return (
    <div className={styles.mainWrapper}>
      <Link className={styles.logOut} href="/api/auth/signout">
        <p>Sign out</p>
      </Link>
    </div>
  );
};

export default SideMenu;
