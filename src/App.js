import React from 'react';

//components
import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import CountryPicker from './components/CountryPicker/CountryPicker';

class App extends React.Component{
    render(){
        return(
            <div>
            <Cards/>
            <CountryPicker/>
            <Charts/>
            </div>
        )

    }
}

export default App;