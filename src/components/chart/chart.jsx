import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';
import styles from './chart.module.css';
import StateMap from '../statePicker/map'
const Chart = (props) => {
    const [h, setH] = useState(0)
    const [w, setW] = useState(0)
    const [dailyData, setDailyData] = useState([]); // only for global
    useEffect(()=>{
        const fetchAPI = async () => {
            setDailyData( await fetchDailyData());
        }
        fetchAPI();
        window.addEventListener('resize', updateWindowDimensions())
    },[]);

    function updateWindowDimensions() {
        setW(window.innerWidth)
        setH(window.innerHeight)
    }
    const lineChart = (
        dailyData.length
        ?(
        <Line
            data = {{
                labels: dailyData.slice().reverse().map(({ date }) => date),
                datasets:[{
                    data: dailyData.slice().reverse().map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true
                },{
                    data: dailyData.slice().reverse().map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill: true 
                }],
            }}
            height = {w<=375?500:150}
        />) 
        : null
        
    );
    const barChart = (
        props.data.confirmed 
        ? (
            <Bar 
                data = {{ 
                    labels: ['Total Infected', 'Newly Infected', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgba(0,0,255,0.5)',
                            'rgba(0,255,0,0.5)',
                            'rgba(255,0,0,0.5)',
                        ],
                        data: [props.data.confirmed, props.data.hospitalized, props.data.deaths]
                    }]
                }}
                options = {{
                    legend: {display: false},
                    title: {display: true, text: `Current state in ${StateMap.get(props.state)}`}
                }}
                height = {w<=375?500:150}
            />
        ) : null
    );
    return (
        <div className = {styles.container}>
           {props.state?barChart:lineChart}
        </div>
        
    )
}
export default Chart;
