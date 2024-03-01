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
          {transferStatuses.map( transferStatus => (
             <div className='transferContainerChild'>
             <TransferCounts status={transferStatus}/>
             </div>
          ))}
        </div>
    </div>
  )
}

export default InnerContainer