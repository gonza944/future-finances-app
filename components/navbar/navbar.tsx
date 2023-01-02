import styles from "./navbar.module.scss";

const Navbar: React.FC = () => {
  return <nav className={styles.navbar}>
    <h3 className={styles.title}>Your finance notebook</h3>
  </nav>;
};

export default Navbar;
