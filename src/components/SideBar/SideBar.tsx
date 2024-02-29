import React from 'react'
import styles from './SideBar.module.css'
import {PeopleFill} from 'react-bootstrap-icons'

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
    <div className={styles.sidebar_items}>
    <PeopleFill size={14}/><h6 className={styles.sidebar_item}>Dashboard</h6>
    </div>
    <div className={styles.sidebar_items}>
    <PeopleFill size={14}/><h6 className={styles.sidebar_item}>Initiate transfer</h6>
    </div>
    <div className={styles.sidebar_items}>
    <PeopleFill size={14}/><h6 className={styles.sidebar_item}>Track requests</h6>
    </div>
    <div className={styles.sidebar_items}>
    <PeopleFill size={14}/><h6 className={styles.sidebar_item}>Pending approvals</h6>
    </div>
    <div className={styles.sidebar_items}>
    <PeopleFill size={14}/><h6 className={styles.sidebar_item}>Transfer history</h6> 
    </div>
    <div className={styles.sidebar_items}>
    <PeopleFill size={14}/><h6 className={styles.sidebar_item}>Logout</h6>
    </div>
    </div>
  )
}

export default SideBar