import React from 'react'
import styles from './InnerContainer.module.css'
import DuBar from '../DuBar/DuBar'
import DashboardWelcome from '../DashboardWelcome/DashboardWelcome'
import TransferCounts from '../TransferCounts/TransferCounts'

const InnerContainer = () => {
 
const transferStatuses = ["Initiated", "Completed", "Cancelled", "Rejected"]
  return (
    <div className={styles.inner_container}>
      <DashboardWelcome></DashboardWelcome>
        <DuBar></DuBar>
        <div className='transferContainer'>
      <div className='transferCountDivOne'>
      <TransferCounts status={transferStatuses[0]}/>
      <TransferCounts status={transferStatuses[1]}/>
      </div>
      <div className='transferCountDivTwo'>
      <TransferCounts status={transferStatuses[2]}/>
      <TransferCounts status={transferStatuses[3]}/>
      </div>
      </div>
    </div>
  )
}

export default InnerContainer