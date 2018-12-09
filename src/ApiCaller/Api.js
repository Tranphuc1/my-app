import axios from 'axios';
import * as Config from '../components/Products/constants/Config';


export default function callApi(endpoint,method ='GET',body ){
    return   axios({
            method:method,
            url: `${Config.API_URl}/${endpoint}.json`,
            data : body
        }).catch(err =>{
            console.log(err);
        })
}
