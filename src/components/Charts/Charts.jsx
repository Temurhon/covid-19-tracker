import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line} from 'react-chartjs-2';

import styles from './Charts.module.css';

const Charts = (data, country) => {
    const [dailyData, setDailyData] = useState([]);

        useEffect(() => {
                const fetchAPI = async () => {
                    setDailyData(await fetchDailyData());
                }
       
                fetchAPI();
                
        },);

        const lineChart = (
            //this statement is used to determine wethere the value has been lodaded into the data.
                dailyData[0] 
                ? (
                <Line 
                data = {{
                    labels: dailyData.map(({date}) => date),
                    datasets: [{
                     data: dailyData.map(({confirmed}) => confirmed),
                     label: 'Infected',
                     borderColor: '#3333ff',
                     fill:true,
                    },{
                        data: dailyData.map(({deaths}) => deaths),
                        label: 'Infected',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255,0,0,0.5)',
                        fill:true,
                       }],
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