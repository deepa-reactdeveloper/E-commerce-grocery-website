import jsonAxios from "../common-components/authorization/json-fetch";
import { getJsonHeaderWithoutToken } from "../common-components/authorization/headers";

export const createShoppingCart = (data) => {
    try {
        // http://beezeebees.com:6009/shopping-carts
        const url = `${process.env.REACT_APP_BASE_URL}/shopping-carts`;
        const response = jsonAxios.jsonAxios({
            url: url,
            method: "post",
            data: data,
            headers: getJsonHeaderWithoutToken(),
        });
        return response;
    } catch (err) {
        throw err;
    }
}

export const fetchShoppingCart = (key) => {
    try {
        // http://beezeebees.com:6009/shopping-carts/151595310550877
        const url = `${process.env.REACT_APP_BASE_URL}/shopping-carts/${key}`;
        const response = jsonAxios.jsonAxios({
            url: url,
            method: "get",
            headers: getJsonHeaderWithoutToken(),
        });
        return response;
    } catch (err) {
        throw err;
    }
}

export const updateShoppingCart = (key, formData) => {
    try {
        // http://beezeebees.com:6009/shopping-carts/161595310128933
        const url = `${process.env.REACT_APP_BASE_URL}/shopping-carts/${key}`;
        const response = jsonAxios.jsonAxios({
            url: url,
            method: "put",
            data: formData,
            headers: getJsonHeaderWithoutToken(),
        });
        return response;
    } catch (err) {
        throw err;
    }
}

export const deleteShoppingCart = (key) => {
    try {
        // http://beezeebees.com:6009/shopping-carts/161595310128933
        const url = `${process.env.REACT_APP_BASE_URL}/shopping-carts/${key}`;
        const response = jsonAxios.jsonAxios({
            url: url,
            method: "delete",
            headers: getJsonHeaderWithoutToken(),
        });
        return response;
    } catch (err) {
        throw err;
    }
}

export const addProductToStoreByCartId = (cartId, productData) => {
    try {
        // http://beezeebees.com:6009/shopping-carts/carts/151595310550877/products
        const url = `${process.env.REACT_APP_BASE_URL}/shopping-carts/carts/${cartId}/products`;
        const response = jsonAxios.jsonAxios({
            url: url,
            method: "put",
            data: productData,
            headers: getJsonHeaderWithoutToken(),
        });
        return response;
    } catch (err) {
        throw err;
    }
}

export const getSavedProductsByCartId = (storeId, cartId) => {
    try {
        // http://beezeebees.com:6009/stores/5efab6885f3b8231a5a4f04e/shopping-carts/carts/211595395666889/products
        const url = `${process.env.REACT_APP_BASE_URL}/stores/${storeId}/shopping-carts/carts/${cartId}/products`;
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
