import React from "react";
import Banner_section from "../components/Basics/Banner_section";
import Goods_list from "../components/Basics/Goods_list";
import Deals_section from "../components/Basics/Deals_section";
import BestSellers_section from "../components/Basics/BestSellers_section";
import Services from "../components/Basics/Services";

const Home_page = () => {
  return (
    <div>
      <Banner_section />
      <Goods_list />
      <Deals_section />
      <BestSellers_section />
      <Services/>
    </div>
  );
};

export default Home_page;
