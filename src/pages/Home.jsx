import React from "react";
import Navbar from "../Components/NavBar/Navbar";
import Accouncement from "../Components/Accouncement/Announcement";
import Slider from "../Components/Slider/Slider";
import Categories from "../Components/Categories/Categories";
import Products from "./../Components/Products/Products";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Accouncement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
