import React, {useState, useEffect} from 'react';
import {fetchDailyData, fetchData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';
import styles from './chart.module.css';

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
                    fill: true,
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
    const lineChart2 = (
        props.data.length
        ?(
        <Line
            data = {{
                labels: props.data.slice().reverse().map(({ lastUpdate }) => lastUpdate),
                datasets:[{
                    data: props.data.slice().reverse().map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true
                },{
                    data: props.data.slice().reverse().map(({deaths}) => deaths),
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
    return (
        <div className = {styles.container}>
           {props.state?lineChart2:lineChart}
        </div>
        
    )
}
export default Chart;
