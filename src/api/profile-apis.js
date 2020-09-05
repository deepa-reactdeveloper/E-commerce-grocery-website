import axios from 'axios';

export function fetchProfile(customerId){
    return axios.get(`${process.env.REACT_APP_BASE_URL}/customers/${customerId}`)
}

export function storeProfile(customerId,data)  {
   
    let url = 'http://beezeebees.com:6009/customers/' + customerId ;
   
    return axios({
        url: url,
        method: "put",
        data: data,
        responseType: "json",
        responseEncoding: "utf8"
    });
   
}

