import React from 'react';

//components
import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import CountryPicker from './components/CountryPicker/CountryPicker';

//change the styling of the webapp
import styles from './App.module.css';

//import the api index file to display it on webapp
import {fetchData} from './api';

class App extends React.Component{

    state = {
       data: {}, 
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data:fetchedData});
    }


    render(){
        const{ data } = this.state;
        return(
            <div className={styles.container}>
            <Cards data={data}/>
            <CountryPicker/>
            <Charts/>
            </div>
        )

    }
}

export default App;