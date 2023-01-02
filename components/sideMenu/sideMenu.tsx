import Link from "next/link";
import PlusIconProps from "../../Assets/plusIcon";
import Button from "../button/button";
import styles from "./sideMenu.module.scss";

const SideMenu: React.FC = () => {
  return (
    <div className={styles.mainWrapper}>
      <Button copy="New Report" onCLick={() => {}}>
        <PlusIconProps props={{ className: styles.plusIcon }} />
      </Button>
      <Link className={styles.logOut} href="/api/auth/signout">
        <p>Sign out</p>
      </Link>
    </div>
  );
};

export default SideMenu;
