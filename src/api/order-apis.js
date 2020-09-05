import axios from 'axios';
import { getJsonHeaderWithoutToken } from '../common-components/authorization/headers';
import  jsonAxios from '../common-components/authorization/json-fetch';
export const fetchOrder = (customerId) => {
   
try{
    const url = 'http://beezeebees.com:6009/customers/' + customerId + '/orders';
    const response = jsonAxios.jsonAxios({
        url: url,
        method: "get",
        responseType: "json",
        responseEncoding: "utf8",
        headers: getJsonHeaderWithoutToken(),
    });
    return response;
}

catch(err){
    throw err ;

}
};

export const fetchOrderById = (storeId , orderId) => {
   
    try{
        const url = 'http://beezeebees.com:6009/stores/' + storeId + '/orders/' + orderId ;
        const response = jsonAxios.jsonAxios({
            url: url,
            method: "get",
            responseType: "json",
            responseEncoding: "utf8",
            headers: getJsonHeaderWithoutToken(),
        });
     
        return response;
    }
    
    catch(err){
        throw err ;
    
    }
    };
