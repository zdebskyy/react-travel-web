import React from "react";
import "./Cards.css";
import CardItem from "../CardItem/CardItem";

const Cards = () => {
  return (
    <div className="cards">
      <h2>Check out this places</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-2.jpg"
              text="Explore the hidden waterfall"
              label="Luxury"
              path="/services"
            />

            <CardItem
              src="images/img-8.jpg"
              text="Explore the hidden waterfall"
              label="Orient"
              path="/services"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src="images/img-4.jpg"
              text="Explore the hidden waterfall"
              label="Luxury"
              path="/services"
            />

            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall"
              label="Orient"
              path="/services"
            />
            <CardItem
              src="images/img-5.jpg"
              text="Explore the hidden waterfall"
              label="Orient"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
