import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl, StylesProvider} from '@material-ui/core';
import styles from './CountryPicker.module.css';

import {fetchCountries} from '../../api';

const CountryPicker = () => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
useEffect(() => {
    const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
    }

    fetchAPI();

},[setFetchedCountries]);
console.log(fetchedCountries);
    return (
        <FormControl className={styles.FormControl}>
            <NativeSelect>
                {/* //options for the country picker */}
                <option value="global">Global</option>
                {/*//looping over the fetched countries from api for the drop down instead of manually putting the countries*/}
    {fetchedCountries.map((country, i) => <option key = {i} value ={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;