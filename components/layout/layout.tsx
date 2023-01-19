import styles from "./layout.module.scss";
import Navbar from "../navbar/navbar";
import SideMenu from "../sideMenu/sideMenu";

type layoutProps = {
  children?: JSX.Element;
};

const Layout: React.FC<layoutProps> = ({ children }) => (
  <div className={styles.wrapper}>
    <Navbar />
    <SideMenu />
    <div className={styles.content}>
    {children}
    </div>
  </div>
);

export default Layout;
