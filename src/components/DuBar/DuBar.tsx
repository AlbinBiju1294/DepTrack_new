import { BarChart } from '@mui/x-charts';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import styles from './DuBar.module.css'

interface AxisConfig {
    id: string;
    data: string[]; // or whatever type xdata is
    scaleType: 'band';
    categoryGapRatio?: number; // Make categoryGapRatio optional
}


const DuBar = () => {

    
    const [duData, setDuData] = useState<Array<{ du_id: string; no_of_transfers: number }>>([]);
  const [xdata, setXdata] = useState<Array<string>>([]);
  const [ydata, setYdata] = useState<Array<number>>([]);
  const [isLoaded,setIsLoaded] = useState(false)

  const token = localStorage.getItem('access_token');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/v1/transfer/bargraph-data/', config);
        console.log('Response from API:', res.data);
        setDuData(res.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  
  useEffect(() => {
    console.log("duData:", duData);
    if (duData && duData.length > 0) {
        const newyData: number[] = [];
        const newxData: string[] = [];
      // Perform operations on duData after it has been updated
      duData.forEach((data) => {
        newxData.push(data.du_id as string);
        newyData.push(data.no_of_transfers as number);
      });
      setXdata(newxData);
      setYdata(newyData);
      setIsLoaded(true)
      console.log(xdata)
      console.log(ydata)
    }
  }, [duData]);
  

  return (
    <div>
      <p className={styles.bar_graph_heading}>Transfers completed</p>
      <div className={styles.bar_chart}>
      {isLoaded?<BarChart 
        xAxis={[
          {
            id: 'barCategories',
            data: xdata,
            scaleType: 'band',
            categoryGapRatio: 0.6,
          } as AxisConfig,
        ]}
        series={[
          {
            data: ydata,
            color: '#5A6ACF',
          },
        ]}
        width={500}
        height={200}
      />:<></>}
      </div>
    </div>
  );
};

export default DuBar;
