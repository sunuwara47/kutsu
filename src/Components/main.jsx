import React, { Component } from "react";
import Slider from "./slider";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { cards: [] };
  }

  componentDidMount = () => {
    fetch("https://my-json-server.typicode.com/sunuwara47/kutsu/cards")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ cards: data });
      })
      .catch();
  };

  added = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "block";
  };

  remove = (e) => {
    e.preventDefault();
    document.querySelector(".popup").style.display = "none";
  };

  render = () => {
    const { cards } = this.state;
    return (
      <React.Fragment>
        <Slider />

        <article className="card">
          {cards.map((card) => (
            <div className="cards" href="/home" id={card.id}>
              <img alt="card-img" src={card.img} />
              <div className="product_des">
                <h2 className="product_name"> {card.product_name} </h2>
                <p className="price"> Rs.{card.product_price}</p>
                <p className="stocks"> {card.stock} </p>
                <button className="add" onClick={this.added}>
                  {" "}
                  Add to Cart{" "}
                </button>
              </div>
            </div>
          ))}
        </article>

        <article className="popup" style={{ display: "none" }}>
          <h2 className="check"> &#10004; </h2> <h3>Item Added to cart </h3>
          <p className="remove" onClick={this.remove}>
            &#10006;
          </p>
        </article>

        <div className="clr"></div>
      </React.Fragment>
    );
  };
}
