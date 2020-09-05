// import jsonAxios from "../common-components/authorization/json-fetch";
// import { getJsonHeaderWithoutToken } from "../common-components/authorization/headers";

// export const fetchProducts = (storeId,categoriesId) => {
//         try {
//             const url = `${process.env.REACT_APP_BASE_URL}/stores/${storeId}/categories/${categoriesId}/products`;
//             const response = jsonAxios.jsonAxios({
//                 url: url,
//                 method: "get",
//                 headers: getJsonHeaderWithoutToken(),
//             });
//             return response;
//         } catch (err) {
//             throw err;
//         }
//     };

import jsonAxios from "../common-components/authorization/json-fetch";
import { getJsonHeaderWithoutToken } from "../common-components/authorization/headers";

export const fetchProducts = () => {
  try {
    const url = `http://beezeebees.com:6009/products`;
    const response = jsonAxios.jsonAxios({
      url: url,
      method: "get",
      headers: {
        "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZTYzOGQ3MmU1MzM1Mjg2YTg1MDZmMSIsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTU5NzIzNTQzNCwiZXhwIjoxNTk3MzIxODM0fQ.0VeG-kfszjC4xpdiNwkmHKCd1K1uC9l8566uBf7v72w"
     }
    });
    console.log(response,"rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrresponse")
    return response;


  } catch (err) {
    throw err;
  }
};

export const fetchProductsByKeySearch = (storeId, value) => {
  try {
    const url = `${process.env.REACT_APP_BASE_URL}/stores/${storeId}/products/search/${value}`;
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

export const fetchProductByProductId = (storeId, productId) => {
  try {
    const url = `${process.env.REACT_APP_BASE_URL}/stores/${storeId}/product/${productId}`;
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

export const fetchProductsByCategoryId = (storeId, categoryId) => {
  try {
    const url = `${process.env.REACT_APP_BASE_URL}/stores/${storeId}/categories/${categoryId}/products`;
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

export const fetchProductsBySubCategoryId = (storeId, subCategoryId) => {
  try {
    const url = `${process.env.REACT_APP_BASE_URL}/stores/${storeId}/sub-categories/${subCategoryId}/products`;
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

export const fetchProductHighlights = (storeId) => {
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

export const fetchProductsByProductHighlightId = (
  storeId,
  productHighlightId
) => {
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
