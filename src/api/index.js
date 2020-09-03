import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
let changableUrl = url;

if(country){
    changableUrl = `${url}/countries/${country}`
}

    //try will be executed if the fetch is successful, otherise it'll be catch.
try{
    //get response from await.
const {data} = await axios.get(changableUrl);

const modifiedData = {
confirmed: data.confirmed,
recovered: data.recovered,
deaths: data.deaths,
lastUpdate: data.lastUpdate,
}



return modifiedData;

}
catch (error){
console.log(error);
}
}

//api fetching the cases of confirmed, deaths and dates in a mapped loop
export const fetchDailyData = async () => {
    try{
            const {data} = await axios.get(`${url}/daily`);
    
    const modifiedData = data.map((dailyData) => ({
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,
    }));
    return modifiedData;
}
    catch(error){

    }
}

//this gets the countries that are available through the api, also looping.
//catch will result in an error through the console.
export const fetchCountries = async () => {

    try{
        const {data : {countries}} = await axios.get(`${url}/countries`);
       
        return countries.map((country) => country.name);
    }catch (error){
       console.log(error);
    }

}


//https://www.youtube.com/watch?v=khJlrj3Y6Ls  1:34:11