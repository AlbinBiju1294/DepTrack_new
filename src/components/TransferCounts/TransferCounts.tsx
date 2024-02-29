import React, { useEffect, useState } from 'react'
// import {Paper} from '@mui/material
import styles from './TransferCounts.module.css'
import { TransferCountsProps, TransferCountData } from './types';
import axios, { AxiosError } from "axios"
 
const TransferCounts: React.FC<TransferCountsProps> = ({status}) => {
 
  const [transferCount, setTransferCount] = useState<TransferCountData>({});
 
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoyOTA5MTM2MzE1LCJpYXQiOjE3MDkxMzYzMTUsImp0aSI6ImNmNDZiMzUwNjhiZTQwNDk5MWI1YzViZDE1NDg4M2NhIiwidXNlcl9pZCI6Mn0.p1Is3UAuq_Z18PaPIkd9vlZRkGEPWOqpW-hAP6qYib0';
  const config = {
    headers: {Authorization: `Bearer ${token}`}
  };
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/v1/transfer/status-count/', config)
        console.log("Transfers counts: ",res.data.data);
        setTransferCount(res.data.data);
       
      }
      catch(error) {
        console.error("Error");
      }
    };
    fetchData();
  }, []);
 
  return (
    <div className={styles.transferCountDiv}>
      <p>Transfers {status} : {transferCount[`Transfer ${status}`]}</p>
    </div>
  )
}
 
export default TransferCounts