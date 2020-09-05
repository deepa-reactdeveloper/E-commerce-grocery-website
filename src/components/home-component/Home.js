import React from "react";
import StaticBanner from "./staticBanner/StaticBanner";
import ProductOfferTag from "./productOfferComponents/ProductOfferTag";
import ProductAdvertComponents from "./productAdvertComponents/ProductAdvertComponents";
import Parallelslider from "./parallelSlider/Parallelslider";
import AdvertiseCards from "./advertiseCardComponents/AdvertiseCards";
import AdvertiseCardSlick from '../common-component/AdvertiseCardSlickComponent/AdvertiseCardSlick'
export default function Home() {
  return (
    <div>
      <ProductAdvertComponents />
      <StaticBanner />
      <AdvertiseCards />
      <AdvertiseCardSlick/>
      <Parallelslider />
   
    </div>
  );
}
