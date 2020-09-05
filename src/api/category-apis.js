import jsonAxios from "../common-components/authorization/json-fetch";
import { getJsonHeaderWithoutToken } from "../common-components/authorization/headers";



export const fetchCategories = (storeId) => {
    try {
        const url = `${process.env.REACT_APP_BASE_URL}/stores/${storeId}/categories`;
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

export const fetchCategorySortItems = (storeId) => {
    try {
        const url = `${process.env.REACT_APP_BASE_URL}/stores/${storeId}/product-highlights`;
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

export const filterProductsFromCategorySortItems = (storeId,productHighlightId) => {
    try {
        const url = `${process.env.REACT_APP_BASE_URL}/stores/${storeId}/product-highlights/${productHighlightId}/products`;
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
