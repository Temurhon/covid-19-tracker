import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    //try will be executed if the fetch is successful, otherise it'll be catch.
try{
    //get response from await.
const {data} = await axios.get(url);

const modifiedData = {
confirmed: data.confirmed,
recovered: data.recovered,
deaths: data.deaths,
lastUpdate: data.lastUpdate,
}

//to see what we are getting.
console.log(modifiedData);

return modifiedData;

}
catch (error){

}
}