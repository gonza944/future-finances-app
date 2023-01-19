import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import PlusIconProps from "../../Assets/plusIcon";
import NotebookIcon from "../../Assets/notebookIcon";
import Button, { ButtonType } from "../button/button";
import styles from "./sideMenu.module.scss";
import SettingsIcon from "../../Assets/settingsIcon";
import LogOut from "../logOut/logOut";

const SideMenu: React.FC = () => {
  const [notebooks, setNotebooks] = useState([
    { name: "mock Notebook 1", id: 1 },
    { name: "mock Notebook 2", id: 2 },
  ]);

  const [selectedNotebook, setSelectedNotebook] = useState(1);

  const onClick = useCallback(
    (id: number) => () => {
      setSelectedNotebook(id);
    },
    []
  );

  const renderNotebooks = useMemo(
    () => (
      <div className={styles.notebookList}>
        {notebooks.map((notebook) => (
          <Button
            key={notebook.id}
            type={ButtonType.Secondary}
            hightlighted={notebook.id === selectedNotebook}
            copy={notebook.name}
            onCLick={onClick(notebook.id)}>
            <NotebookIcon props={{ className: styles.plusIcon }} />
          </Button>
        ))}
      </div>
    ),
    [notebooks, onClick, selectedNotebook]
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
      <LogOut />
    </div>
  );
};

export default SideMenu;
