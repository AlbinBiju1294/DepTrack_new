import React from 'react'
import styles from './InnerContainer.module.css'
import DuBar from '../DuBar/DuBar'
import DashboardWelcome from '../DashboardWelcome/DashboardWelcome'

const InnerContainer = () => {
  return (
    <div className={styles.inner_container}>
      <DashboardWelcome></DashboardWelcome>
        <DuBar></DuBar>
    </div>
  )
}

export default InnerContainer