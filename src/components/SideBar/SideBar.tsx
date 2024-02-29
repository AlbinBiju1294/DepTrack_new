import React from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import LaunchIcon from "@mui/icons-material/Launch";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import TimelineIcon from "@mui/icons-material/Timeline";
import styles from "./SideBar.module.css";
import { useState, useContext, useEffect } from "react";
import UserContext from "../Contexts/UserContextProvider";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const SideBar = () => {
  const [activeDiv, setActiveDiv] = useState<number>(1);
  const { user } = useContext(UserContext);

  const handleDivClick = (divId: number) => {
    setActiveDiv(divId);
  };

  return (
    <div className={styles.navwrap}>
      <div
        className={`${
          activeDiv === 1
            ? `${styles.sidebar_items_active}`
            : `${styles.sidebar_items}`
        }`}
        onClick={() => {
          handleDivClick(1);
        }}
      >
        <DescriptionIcon className={styles.icon} />
        <h6
          className={`${
            activeDiv === 1
              ? `${styles.sidebar_item_active}`
              : `${styles.sidebar_item}`
          }`}
        >
          Dashboard
        </h6>
      </div>
      <div
        className={`${
          user?.role !== 5
            ? `${styles.no_display}`
            : activeDiv === 7
            ? `${styles.sidebar_items_active}`
            : `${styles.sidebar_items}`
        }`}
        onClick={() => {
          handleDivClick(7);
        }}
      >
        <AdminPanelSettingsIcon className={styles.icon} />
        <h6
          className={`${
            activeDiv === 7
              ? `${styles.sidebar_item_active}`
              : `${styles.sidebar_item}`
          }`}
        >
          Manage DU
        </h6>
      </div>
      <div
        className={`${
          user?.role !== 1 && user?.role !== 2
            ? `${styles.no_display}`
            : activeDiv === 2
            ? `${styles.sidebar_items_active}`
            : `${styles.sidebar_items}`
        }`}
        onClick={() => {
          handleDivClick(2);
        }}
      >
        <LaunchIcon className={styles.icon} />
        <h6
          className={`${
            activeDiv === 2
              ? `${styles.sidebar_item_active}`
              : `${styles.sidebar_item}`
          }`}
        >
          Initiate transfer
        </h6>
      </div>
      <div
        className={`${
          user?.role === 5
            ? `${styles.no_display}`
            : activeDiv === 3
            ? `${styles.sidebar_items_active}`
            : `${styles.sidebar_items}`
        }`}
        onClick={() => {
          handleDivClick(3);
        }}
      >
        <TimelineIcon className={styles.icon} />
        <h6
          className={`${
            activeDiv === 3
              ? `${styles.sidebar_item_active}`
              : `${styles.sidebar_item}`
          }`}
        >
          Track requests
        </h6>
      </div>
      <div
        className={`${
          user?.role !== 1
            ? `${styles.no_display}`
            : activeDiv === 4
            ? `${styles.sidebar_items_active}`
            : `${styles.sidebar_items}`
        }`}
        onClick={() => {
          handleDivClick(4);
        }}
      >
        <PendingActionsIcon className={styles.icon} />
        <h6
          className={`${
            activeDiv === 4
              ? `${styles.sidebar_item_active}`
              : `${styles.sidebar_item}`
          }`}
        >
          Pending approvals
        </h6>
      </div>
      <div
        className={`${
          user?.role === 5
            ? `${styles.no_display}`
            : activeDiv === 5
            ? `${styles.sidebar_items_active}`
            : `${styles.sidebar_items}`
        }`}
        onClick={() => {
          handleDivClick(5);
        }}
      >
        <HistoryIcon className={styles.icon} />
        <h6
          className={`${
            activeDiv === 5
              ? `${styles.sidebar_item_active}`
              : `${styles.sidebar_item}`
          }`}
        >
          Transfer history
        </h6>
      </div>
      <div
        className={`${
          activeDiv === 6
            ? `${styles.sidebar_items_active}`
            : `${styles.sidebar_items}`
        }`}
        onClick={() => {
          handleDivClick(6);
        }}
      >
        <LogoutIcon className={styles.icon} />
        <h6
          className={`${
            activeDiv === 6
              ? `${styles.sidebar_item_active}`
              : `${styles.sidebar_item}`
          }`}
        >
          Logout
        </h6>
      </div>
    </div>
  );
};
export default SideBar;
