import shopcart from "../../../assets/checkout/cart toggle/shopCart.png"
import Delivery from "../../../assets/checkout/cart toggle/Delivery.png"
import Login from "../../../assets/checkout/cart toggle/Login.png"

export const cartProgressBar = [
    {
       name : `Delivery & payment`,
       styleProgressValue : {width:'100%'},
       img : shopcart,
       value:`100`
    },
    {
        name : `Login / Signup`,
        styleProgressValue : {width:'100%'},
        img : Login,
        value:`0`
     },
     {
        name : `Delivery & payment`,
        styleProgressValue : {width:'100%'},
        img : Delivery,
        value:`0`
     }
]