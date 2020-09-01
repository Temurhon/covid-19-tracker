import React from 'react';

//components
import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import CountryPicker from './components/CountryPicker/CountryPicker';

import styles from './App.module.css';

class App extends React.Component{
    render(){
        return(
            <div className={styles.container}>
            <Cards/>
            <CountryPicker/>
            <Charts/>
            </div>
        )

    }
}

export default App;