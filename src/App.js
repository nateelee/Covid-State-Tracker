import React from 'react';
import {Component} from 'react';

import {Cards, Chart, StatePicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

class App extends Component {
    state = {
        data: [],
        state: '',

    }
    async componentDidMount () {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }
    handleCountryChange = async(state) => {
        const fetchedData = await fetchData(state);
        this.setState({
            data : fetchedData,
            state: state
        });
    }
    render() {
       
        return (
            <div class = {styles.container}>
                <p className = {styles.p}>Covid-19 Statewide Tracker</p>
                <Cards data = {this.state.data}/>
                <StatePicker handleCountryChange = {this.handleCountryChange}/>
                <Chart data = {this.state.data} state = {this.state.state}/>

            </div>
        );
    }
}
export default App;
