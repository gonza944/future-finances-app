import Link from "next/link";
import { useMemo, useState } from "react";
import PlusIconProps from "../../Assets/plusIcon";
import NotebookIcon from "../../Assets/notebookIcon";
import Button, { ButtonType } from "../button/button";
import styles from "./sideMenu.module.scss";
import SettingsIcon from "../../Assets/settingsIcon";
import LogOut from "../logOut/logOut";

const SideMenu: React.FC = () => {
  const [notebooks, setNotebooks] = useState([
    { name: "mock Notebook 1", selected: true, id: 1 },
    { name: "mock Notebook 2", selected: false, id: 2 },
  ]);

  const renderNotebooks = useMemo(
    () => (
      <div className={styles.notebookList}>
        {notebooks.map((notebook) => (
          <Button
            key={notebook.id}
            type={ButtonType.Secondary}
            hightlighted={notebook.selected}
            copy={notebook.name}
            onCLick={() => {}}>
            <NotebookIcon props={{ className: styles.plusIcon }} />
          </Button>
        ))}
      </div>
    ),
    [notebooks]
  );

  return (
    <div className={styles.mainWrapper}>
      <Button type={ButtonType.Primary} copy="New Report" onCLick={() => {}}>
        <PlusIconProps props={{ className: styles.plusIcon }} />
      </Button>
      <div className={styles.notebookWrapper}>
        <p className={styles.copy}>Notebooks</p>
        {renderNotebooks}
      </div>
      <Button
        type={ButtonType.Secondary}
        hightlighted={false}
        copy="Settings"
        onCLick={() => {}}>
        <SettingsIcon props={{ className: styles.plusIcon }} />
      </Button>
      <LogOut/>
    </div>
  );
};

export default SideMenu;
