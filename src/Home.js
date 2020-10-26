import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="49538094"
            title="The lean startup"
            price={29.0}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
          />
          <Product
            id="49538095"
            title="
            Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)"
            price={50.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61%2BQNG8IiPL._SL1000_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="49538096"
            title="
            OnePlus 8 (Glacial Green 6GB RAM+128GB Storage)
            "
            price={450.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71KJ3loLvyL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="49538097"
            title="
            OnePlus 8 Pro (Ultramarine Blue 12GB RAM+256GB Storage)"
            price={789.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61CmMarQs2L._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="49538098"
            title="
            OnePlus 8 (Glacial Green 6GB RAM+128GB Storage)"
            price={599.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71KJ3loLvyL._SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="49538099"
            title="LG 9 Kg Front Loading Fully Automatic Washing Machine, FHT1409ZWS.ASSQEIL"
            price={600.0}
            image="https://www.reliancedigital.in/medias/LG-FHT1409ZWS-ASSQEIL-Washing-Machines-491891791-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w5MzkyOHxpbWFnZS9qcGVnfGltYWdlcy9oN2IvaDA2LzkzMzQzNTA3NzQzMDIuanBnfDE2MDhjMjUwOTNkNTI0ZmE1ZTg0YjlkZWEzNjhmMDg4MzdjNTAxZjRlYjBkZTIzNmRiMWMyMDliNGNiMTk4ZTY"
            rating={5}
          />
          <Product
            id="495380100"
            title="
            LG 6.5 Kg 5 Star Inverter Fully-Automatic Front Loading Washing Machine (FHT1265ZNL, Luxury Silver, 6 Motion Direct Drive)"
            price={500.0}
            image="https://images-na.ssl-images-amazon.com/images/I/810-NkbN1OL._SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="495380100"
            title="
            Sony Bravia 164 cm (65 inches) 4K Ultra HD Certified Android LED TV 65X8000H (Black) (2020 Model)
          "
            price={1500.0}
            image="https://images-na.ssl-images-amazon.com/images/I/91UYojFHobL._SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
