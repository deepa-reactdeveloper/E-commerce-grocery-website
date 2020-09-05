import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/home-component/headerComponents/Header";
import Footer from "./components/home-component/footerComponents/Footer";
import Home from "./components/home-component/Home";
import ProductViewComponent from "./components/product-component/ProductViewComponent/ProductViewComponent"
import CartCheckout from "./components/checkout-component/CartCheckout";
import OrderProcessing from "./components/checkout-component/orderProcessing/OrderProcessing";
import MyAccount from "./components/user-account/MyAccount/MyAccount";
import MyAccountForm from "./components/user-account/MyAccount/MyAccountForm";
import MyAddress from "./components/user-account/MyAddress/MyAddress";
import MyProfileOrder from "./components/user-account/MyOrder/MyProfileOrder";
import MyWishList from "./components/user-account/MyWishlist/MyWishList";
import MyMembership from "./components/user-account/MyMembership";
import ProfilePasswordManager from './components/user-account/UserPassword/ProfilePasswordManager'
import ProductComponent from "./components/product-component/ProductComponent"
import Slick from './components/Slick'
// import AdvertiseCardSlick from "./components/AdvertiseCardSlickComponent/AdvertiseCardSlick"
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product-detail" component={ProductViewComponent} />
        <Route exact path="/cart-checkout" component={CartCheckout} />
        <Route exact path="/order-processing" component={OrderProcessing} />
        <Route exact path='/product-page' component={ProductComponent} />
        <Route exact path="/slick" component={Slick} />
        
        <Route
        exact
        path="/my-account"
        component={() => <MyAccount myProfile={<MyAccountForm />} />}
      />
      <Route
        exact
        path="/account-address"
        component={() => <MyAccount myProfile={<MyAddress />} />}
      />
      <Route
        exact
        path="/account-order"
        component={() => <MyAccount myProfile={<MyProfileOrder />} />}
      />
      <Route
        exact
        path="/account-wishlist"
        component={() => <MyAccount myProfile={<MyWishList />} />}
      />
      <Route
        exact
        path="/account-membership"
        component={() => <MyAccount myProfile={<MyMembership />} />}
      />
      <Route
        exact
        path="/account-password"
        component={() => <MyAccount myProfile={<ProfilePasswordManager />} />}
      />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
