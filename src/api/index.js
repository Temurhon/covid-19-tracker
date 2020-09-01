import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    //try will be executed if the fetch is successful, otherise it'll be catch.
try{
    //get response from await.
const response = await axios.get(url);

//to see what we are getting.
console.log(response);

return response;

}
catch (error){

}
}