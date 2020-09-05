import jsonAxios from "../common-components/authorization/json-fetch";
import { getJsonHeaderWithoutToken } from "../common-components/authorization/headers";


export const fetchAddresses = (customerId) => {
    try {
        const url = `${process.env.REACT_APP_BASE_URL}/customers/${customerId}/addresses`;
        const response = jsonAxios.jsonAxios({
            url: url,
            method: "get",
            headers: getJsonHeaderWithoutToken(),
        });
        return response;
    } catch (err) {
        throw err;
    }
};

export const fetchLocalities = () => {
    try {
        const url = `${process.env.REACT_APP_BASE_URL}/localities`;
        const response = jsonAxios.jsonAxios({
            url: url,
            method: "get",
            headers: getJsonHeaderWithoutToken(),
        });
        return response;
    } catch (err) {
        throw err;
    }
};

export const fetchCities = () => {
    try {
        const url = `${process.env.REACT_APP_BASE_URL}/cities`;
        const response = jsonAxios.jsonAxios({
            url: url,
            method: "get",
            headers: getJsonHeaderWithoutToken(),
        });
        return response;
    } catch (err) {
        throw err;
    }
};

export const fetchLocalitiesByFilterDropdown = () => {
    try {
        const url = `${process.env.REACT_APP_BASE_URL}/localities?filterType=Dropdown`;
        const response = jsonAxios.jsonAxios({
            url: url,
            method: "get",
            headers: getJsonHeaderWithoutToken(),
        });
        return response;
    } catch (err) {
        throw err;
    }
};

export const fetchCitiesByFilterDropdown = () => {
    try {
        const url = `${process.env.REACT_APP_BASE_URL}/cities?filterType=Dropdown`;
        const response = jsonAxios.jsonAxios({
            url: url,
            method: "get",
            headers: getJsonHeaderWithoutToken(),
        });
        return response;
    } catch (err) {
        throw err;
    }
};

export const createOrUpdateAddress = (customerId, formData) => {
    try {
        const url = `${process.env.REACT_APP_BASE_URL}/customers/${customerId}/address`;
        const response = jsonAxios.jsonAxios({
            url: url,
            method: "put",
            data: formData,
            responseType: "json",
            responseEncoding: "utf8",
            headers: getJsonHeaderWithoutToken(),
        });
        return response;
    } catch (err) {
        throw err;
    }
};

export const deleteAddress = (customerId, addressId) => {
    try {
        const url = `${process.env.REACT_APP_BASE_URL}/customers/${customerId}/${addressId}`;
        const response = jsonAxios.jsonAxios({
            url: url,
            method: "delete",
            responseType: "json",
            responseEncoding: "utf8",
            headers: getJsonHeaderWithoutToken(),
        });
        return response;
    } catch (err) {
        throw err;
    }
};







