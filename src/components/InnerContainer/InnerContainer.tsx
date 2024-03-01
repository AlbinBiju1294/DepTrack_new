import React from 'react'
import styles from './InnerContainer.module.css'
import DuBar from '../DuBar/DuBar'
import DashboardWelcome from '../DashboardWelcome/DashboardWelcome'
import TransferCounts from '../TransferCounts/TransferCounts'
import TransferCountsDisplay from '../TransferCountsDisplay/TransferCountsDisplay'

const InnerContainer = () => {
 
  return (
    <div className={styles.inner_container}>
      <DashboardWelcome></DashboardWelcome>
        <DuBar></DuBar>
        <TransferCountsDisplay></TransferCountsDisplay>
    </div>
  )
}

export default InnerContainer