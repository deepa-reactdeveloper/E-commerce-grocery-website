import axios from 'axios';
import { getJsonHeaderWithoutToken } from '../common-components/authorization/headers';
import  jsonAxios from '../common-components/authorization/json-fetch';

export const storePassword = (customerId,formData) => {
    try {
        const url = `${process.env.REACT_APP_BASE_URL}/customer/${customerId}/update/password`;
        const response = jsonAxios.jsonAxios({

            url: url,
            method: "post",
            responseType: "json",
            data: formData,
            responseEncoding: "utf8",
            headers: {
               "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZTYzOGQ3MmU1MzM1Mjg2YTg1MDZmMSIsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTU5NTQ3ODQ3OCwiZXhwIjoxNTk1NTY0ODc4fQ.iJxJwY3QRvwbRRz2QSrKEkCGnbtsOcYLUUlMXz3qdiA"
            }
            // headers: getJsonHeaderWithoutToken(),
        });
        console.log(response,"reeeeeeeeeeeeeeeeeeeeeeeeeeepppppp")
        return response;
        
    } catch (err) {
        throw err;
    }
};

