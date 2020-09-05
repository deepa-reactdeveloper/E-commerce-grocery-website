import jsonAxios from "../common-components/authorization/json-fetch";
import { getJsonHeaderWithoutToken } from "../common-components/authorization/headers";

export const fetchStores = (storeId) => {
  try {
    const url = `${process.env.REACT_APP_BASE_URL}/stores/${storeId}/store-products`;
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