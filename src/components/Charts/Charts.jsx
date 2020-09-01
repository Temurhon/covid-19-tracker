import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';

import styles from './Charts.module.css';

const Charts = () => {
    const [dailyData, setDailyData] = useState([]);

        useEffect(() => {
                const fetchapi = async () => {
                    const dailyData = await fetchDailyData();
                }

                fetchAPI();
        });

        const lineChart = (
            dailyData.length
             ?(
            <Line
            data={{
                labels: dailyData(({date}) => date),
                datasets: [{
                    data: dailyData(({date}) => confirmed),
                    label: 'Infected',
                    borderColor:'#3333ff',
                    fill: true,
                }, {
                    data: dailyData(({date}) => deaths),
                    label: 'Deaths',
                    borderColor:'red',
                    borderColor: 'rgba(255,0,0,0.5)',
                    fill: true,
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