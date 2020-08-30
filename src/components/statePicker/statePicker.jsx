
import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './statePicker.module.css'
import {fetchStates} from '../../api';

const CountryPicker = (props) => {
    const [fetchedStates, setFetchedStates] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedStates(await fetchStates());
        }
        fetchAPI();
    }, [setFetchedStates]); 
    // second param to useEffect b/c with this, will change only when setFetched Countries change
    // some countries are listed that dont exist
    return (
        <FormControl className = {styles.formControl}>
            <NativeSelect defaultValue ="" onChange = {(e)=> {props.handleCountryChange(e.target.value)}}>
                <option value = "">The United States of America</option>
                {fetchedStates.map((state,i)=>
                 <option key = {i} value = {state}>{state}</option>
                )}
            </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker;
