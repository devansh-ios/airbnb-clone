import React from "react";
import "./Home.css";
import Card from "./components/Card";
import Banner from "./components/Banner";
const Home = () => {
  return (
    <div className="home">
      <Banner />

      <div className="home_section">
        <Card src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720" 
        desc=" home as homies" 
        title="Home" 
  
         />

        <Card src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720" 
        desc="Spaces that are more ta=han just a place to sleep" 
        title="Unique Stays" 
      
        />

        <Card src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
         desc="Comfortable Private Places with room for friends or family. " 
         title="Entire Homes" 
         />
      </div>
      <div className="home_section">
        <Card src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg "
         desc="Supehost with a stunning view of the beachside 
         in sunny bournemouth" 
         title="3 bedroom flat in bournemouth" 
         price="$130/night" />

        <Card src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg" 
        desc="Enjoy the awazing sights of London with this stunning penthouse" 
        title="penthouse in London"
         price="$350/night" />

        <Card src="https://media.nomadicmatt.com/2018/apartment.jpg" 
        desc="SuperHost with great amenitits
         and a faboulous  stunning penthouse" 
        title="1 Bedrrom Apartment"
         price="$70/night" />
      </div>
    </div>
  );
};

export default Home;
