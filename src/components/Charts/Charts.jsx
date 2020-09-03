import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line} from 'react-chartjs-2';

import styles from './Charts.module.css';

const Charts = () => {
    const [dailyData, setDailyData] = useState([]);

        useEffect(() => {
                const fetchAPI = async () => {
                    setDailyData(await fetchDailyData());
                }
            console.log(dailyData);
                fetchAPI();
                
        },);

        const lineChart = (
            //this statement is used to determine wethere the value has been lodaded into the data.
                dailyData[0] 
                ? (
                <Line 
                data = {{
                    labels: '',
                    datasets: [{},{}],
                }}
                />) : null
        );

    return (
        <div className={styles.container}>
                {lineChart}
        </div>
    )
}

export default Charts;